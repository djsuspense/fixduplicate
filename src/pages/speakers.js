import React from "react"
import { 
  useStaticQuery, 
  graphql,
  navigate 
} from "gatsby"
import { 
  handleLogin, 
  isLoggedIn 
} from "../services/auth"
import "../style/main.scss"

import Layout2021 from "../components/layout2021"
import Speakers from "../components/speakers"
import Footer2021 from "../components/footer2021"
import Login from "../components/login"

const SpeakerPage = () => {
  
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
            event
            org
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
    <Layout2021>
      <Speakers speakers={speakers} />
      <Footer2021 />
    </Layout2021>
  )
}

export default SpeakerPage