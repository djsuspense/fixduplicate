import React from "react"
import { 
  useStaticQuery, 
  graphql,
  navigate 
} from "gatsby"
import { 
  handleLogin, 
  isLoggedIn 
} from "../../services/auth"
import "../../style/main.scss"

import Layout from "../../components/layout"
import About from "../../components/about"
import Aboutparallax from "../../components/aboutparallax"
import Sponsors from "../../components/sponsors"
import Sponsorops from "../../components/sponsorops"
import Location from "../../components/location"
import Login from "../../components/login"

const IndexPage = () => {
  
  const data = useStaticQuery( graphql`
    query {
      site {
        siteMetadata {
          description
          title
          speakers {
            name
            title
            image
          }
          sponsors {
            name
            package
            logo
            url
          }
          venue {
            name
            street
            city
            state
            zipCode
          }
        }
      }
    }
  `)

  const {
    description,
    speakers,
    sponsors,
    venue, title
  } = data.site.siteMetadata

    const loginUI = typeof window == `undefined` ? null : <Login title={title} 
      handleLogin={ creds => handleLogin(creds)}
      onSuccess={() => navigate(`/`)}
    /> 
  return (  
    <Layout>
      <About sponsors={sponsors} description={description} />
      <Aboutparallax />
      <Sponsors />
      <Sponsorops />
    </Layout>
  )
}

export default IndexPage