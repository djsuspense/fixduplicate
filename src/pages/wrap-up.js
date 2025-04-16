import React from "react"
import {
  useStaticQuery,
  graphql,
  // navigate
} from "gatsby"
// import {
//   handleLogin,
//   isLoggedIn
// } from "../services/auth"
import "../style/main.scss"

import Layout2021 from "../components/layout2021"
import AboutWrap2021 from "../components/aboutwrap2021"
import NewsQuad from "../components/newsquad"
import SponsorsWrap2021 from "../components/sponsorswrap2021"

import Footer2021 from "../components/footer2021"
// import Login from "../components/login"

const IndexPage = () => {

  const data = useStaticQuery( graphql`
    query {
      site {
        siteMetadata {
          description
          sponsors {
            name
            package
            logo
            url
          }
        }
      }
    }
  `)

  const {
    description,
    // speakers,
    sponsors//,
    // venue, title
  } = data.site.siteMetadata

    // const loginUI = typeof window == `undefined` ? null : <Login title={title}
    //   handleLogin={ creds => handleLogin(creds)}
    //   onSuccess={() => navigate(`/`)}
    // />
  return (
    <Layout2021>
      <SponsorsWrap2021 sponsors={sponsors} />
      <AboutWrap2021 sponsors={sponsors} description={description} />
      <NewsQuad />

      <Footer2021 />
    </Layout2021>
  )
}

export default IndexPage