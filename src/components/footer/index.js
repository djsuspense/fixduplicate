/**
 * Footer component 
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./footer.module.css"
import footlogo from "./cwlogo.png"
import blbg from "./blbg.png"

const Footer = ( {siteLogo, publicationUrl, social}) => {
    const data = useStaticQuery( graphql`
        query {
            logo: file(relativePath: { eq: "logo-fedscoop2.svg" }) {
                url: publicURL
          }
        }
    `)
    return (
        <footer>
            <div className={styles.f_wrap}>
            <div className={styles.containfix}>
                <div className={`branding ${styles.branding}`}>
                    <a href={publicationUrl} target="_blank" rel="noopener noreferrer">
                        <img className={styles.logo} src={footlogo} alt="" />
                    </a>
                    <div className={`inline ${styles.inline}`}>
                        
                        <a href="https://www.facebook.com/cyberscoop" target="_blank" rel="noopener noreferrer" className={styles.socialicons}><i className="fa fa-facebook-square fa-fw"></i></a>
                        <a href="https://www.instagram.com/cyberscoopnews" target="_blank" rel="noopener noreferrer" className={styles.socialicons}><i className="fa fa-instagram fa-fw"></i></a>
                        <a href="https://www.linkedin.com/company/cyberscoop" target="_blank" rel="noopener noreferrer" className={styles.socialicons}><i className="fa fa-linkedin fa-fw"></i></a>
                        <a href="https://www.twitter.com/cyberscoopnews" target="_blank" rel="noopener noreferrer" className={styles.socialicons}><i className="fa fa-twitter fa-fw"></i></a>
                    </div>
                </div>
                
            </div>
            </div>
        </footer>
    )
}

const Link = ({text, url}) => (
    <span className={`inline-link ${styles.inlineLink}`}>
        <a href={url} className={`inline-link-text ${styles.inlineLinkText}`}>
            {text}
        </a>
    </span>
)

Footer.defaultProps = {
    publicationUrl: `https://www.cyberscoop.com/`,
}
export default Footer