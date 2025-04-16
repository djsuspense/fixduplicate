# gatsby-image

file() from from gatsby-source-filesystem
imageSharp() from gatsby-plugin-sharp
allImageSharp() from gatsby-plugin-sharp

Note: you can also use [GraphQL aliases](https://www.gatsbyjs.org/docs/graphql-reference/#aliasing) for querying multiple images of the same type.
ie. GatsbyImageSharpFixed

## props

See https://www.gatsbyjs.org/docs/gatsby-image/#gatsby-image-props

```js
<Img
  fluid={data.file.childImageSharp.fluid}
  alt="Cat taking up an entire chair"
  fadeIn="false"
  className="customImg"
  placeholderStyle={{ `backgroundColor`: `black` }}
  onLoad={() => {
    // do loading stuff
  }}
  onStartLoad={({ wasCached }) => {
    // do stuff on start of loading
    // optionally with the wasCached boolean parameter
  }}
  onError={(error) => {
    // do error stuff
  }}
  Tag="custom-image"
  loading="eager"
/>
```

## fluild

create multiple image sizes (1x, 1.5x, etc.)

```js
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/default.jpg" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <h1>Hello gatsby-image</h1>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Gatsby Docs are awesome"
      />
    </div>
  )
}
```

In a query, you can specify options for fluid images.

maxWidth (int, default: 800)
maxHeight(int)
quality (int, default: 50)
srcSetBreakpoints (array of int, default: [])
fit (string, default: [sharp.fit.cover][6])
background (string, default: rgba(0,0,0,1))
grayscale (bool, default: false)
duotone (bool|obj, default: false)
toFormat (string, default: ``)
cropFocus (string, default: [sharp.strategy.attention][6])
pngCompressionSpeed (int, default: 4)


Returns
base64 (string)
src (string)
width (int)
height (int)
aspectRatio (float)
src (string)
srcSet (string)

### fixed

create multiple image sizes (1x, 1.5x, etc.)

Create flexible sizes for an image that stretches to fill its container. E.g. for a container whose max width is 800px, the automatic sizes would be: 200px, 400px, 800px, 1200px and 1600px – enough to provide close to the optimal image size for every device size / screen resolution. If you want more control over which sizes are output you can use the srcSetBreakpoints parameter.

```js
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/default.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div>
      <h1>Hello gatsby-image</h1>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt="Gatsby Docs are awesome"
      />
    </div>
  )
}
```

Fixed image query parameters
In a query, you can specify options for fixed images.
  width (int, default: 400)
  height (int)
  quality (int, default: 50)
grayscale (bool, default: false)
duotone (bool|obj, default: false)
toFormat (string, default: ``)
cropFocus (string, default: [sharp.strategy.attention][6])
pngCompressionSpeed (int, default: 4)

Returns
  base64 (string)
  aspectRatio (float)
  width (float)
  height (float)
  src (string)
  srcSet (string)

Fragments like GatsbyImageSharpFixed return all the above items in one line without having to type them all out.
see https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/?=#fixed
See https://www.gatsbyjs.org/packages/gatsby-image#fragments

### resize

returns a single image

```js
allImageSharp {
  edges {
    node {
        resize(width: 150, height: 150, grayscale: true) {
          src
        }
    }
  }
}
```

Parameters
width (int, default: 400)
height (int)
quality (int, default: 50)
jpegProgressive (bool, default: true)
pngCompressionLevel (int, default: 9)
base64(bool, default: false)

Returns
Resize returns an object with the following items:

src (string)
width (int)
height (int)
aspectRatio (float)

### fragments

Common fragments with gatsby-transformer-sharp
Fixed images
GatsbyImageSharpFixed
GatsbyImageSharpFixed_noBase64
GatsbyImageSharpFixed_tracedSVG
GatsbyImageSharpFixed_withWebp
GatsbyImageSharpFixed_withWebp_noBase64
GatsbyImageSharpFixed_withWebp_tracedSVG
Fluid images
GatsbyImageSharpFluid
GatsbyImageSharpFluid_noBase64
GatsbyImageSharpFluid_tracedSVG
GatsbyImageSharpFluid_withWebp
GatsbyImageSharpFluid_withWebp_noBase64
GatsbyImageSharpFluid_withWebp_tracedSVG

see https://www.gatsbyjs.org/docs/gatsby-image/#image-query-fragments
