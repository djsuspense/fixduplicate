// ./gatsby-node.js
const path = require("path")
const fs = require("fs-extra")
const { merge } = require("webpack-merge")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

// We'll reuse this to produce nice hashed filenames in production
const filename = "[name]-[contenthash].js"

function getOutput(stage) {
  switch (stage) {
    case "develop":
      return {
        filename: `[id].js`,
      }
    case "build-javascript":
      return {
        filename: filename,
        chunkFilename: filename,
      }
    default:
      return {}
  }
}

exports.onCreateWebpackConfig = ({ stage, actions, getConfig, loaders }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /aws-amplify|amazon-cognito-identity-js|@aws-amplify/,
            use: loaders.null(),
          },
        ],
      },
    })
  }

  // Grab the existing webpack config so we can modify/extend it
  let config = getConfig()

  // If building for production JS, disable source maps & add polyfill
  if (stage === "build-javascript") {
    actions.setWebpackConfig({
      devtool: false,
    })

    // Add IE / older browser polyfills
    const app = Array.isArray(config.entry.app)
      ? config.entry.app
      : [config.entry.app]
    config.entry.app = ["@babel/polyfill", ...app]
    actions.replaceWebpackConfig(config)
    // We do another getConfig() after replace, to keep it up to date
    config = getConfig()
  }

  // Add rules to Babel-transpile certain ESM packages in node_modules
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(m?js|ts|tsx)$/,
          // Force Babel for these ESM modules:
          include: [
            /node_modules\/@ai-sdk/,       // @ai-sdk/react & @ai-sdk/provider-utils
            /node_modules\/zod/,
            /node_modules\/zod-to-json-schema/,
          ],
          use: [loaders.js()],
          type: "javascript/auto", // treat as JS
        },
      ],
    },
    resolve: {
      extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
      mainFields: ["browser", "module", "main"],
    },
  })

  // Now merge in any final output changes (hashing, chunk names, etc.)
  actions.replaceWebpackConfig(
    merge(getConfig(), {
      output: getOutput(stage),
    })
  )
}

// ------------------
// Example of page creation below
// ------------------
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const livePageComponent = path.resolve("src/pages/live/index.tsx")
  // Example: create day-based pages
  // const days = [1, 2, 3, 4, 5]

  // Collect data for sessions, sponsors, etc.
  const result = await graphql(`
    query MyQuery {
      allSessionsJson {
        sessions: nodes {
          slug
          videoId
        }
      }
      allSponsorsJson {
        sponsors: nodes {
          name
          logo
          email
          slug
          url
          welcomeVideoId
          welcomeVideoProvider
          boothBannerUri
          more
          description
          width
          widthModal
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // Create "live/session" pages
  const { sessions } = result.data.allSessionsJson
  sessions.forEach((session) => {
    const pathUrl = `live/${session.slug}`
    createPage({
      path: pathUrl,
      component: livePageComponent,
      context: { ...session },
    })
    reporter.info(`Created ${pathUrl}`)
  })

  // Copy local JSON files to /static
  const files = [
    {
      path: "src/pages/events.json",
      name: "communityEvents.json",
    },
    {
      path: "src/data/sessionVideosToday.json",
      name: "spotlightSeries.json",
    },
  ]
  files.forEach((file) => {
    const srcPath = path.join(__dirname, file.path)
    const destPath = path.join(__dirname, "public", "static", file.name)

    try {
      fs.copyFileSync(srcPath, destPath)
      reporter.info(`Successfully copied ${file.name} to the static folder`)
    } catch (err) {
      reporter.error(`Error copying ${file.name} to the static folder`, err)
    }
  })
}
