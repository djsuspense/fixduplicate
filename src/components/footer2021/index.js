/**
 * Footer component
 */

import React from "react"
import { useAuth } from "../../context/authContext"
// import { useStaticQuery, graphql } from "gatsby"
import styles from "./footer2021.module.scss"

const Footer = ( {siteLogo, publicationUrl, social}) => {
    const { user, handleOnRegistrationClick } = useAuth();
    // const data = useStaticQuery( graphql`
    //     query {
    //         logo: file(relativePath: { eq: "logo-fedscoop2.svg" }) {
    //             url: publicURL
    //       }
    //     }
    // `)
    return (
        <footer className={styles.footer2021}>
            <div className={styles.f_wrap}>
            <div className={styles.containfix}>
                <div className={`branding ${styles.branding}`}>
                    <a href={publicationUrl} target="_blank" rel="noopener noreferrer" className={styles.ftLogo}>
                        <img className={styles.logo} src="https://cdn.fedscoop.com/upgather/ai-week-2024/AIWeekLogo.png" alt="AIWeek Presented by AIScoop" />
                    </a>
                    <a className={styles.regyellow} onClick={handleOnRegistrationClick}>REGISTER</a>
                </div>
                <div className={styles.links}>
                    <div className={`inline ${styles.inline}`}>
                        <ul>
                            <li><span className="aigreen">#AI</span>WEEK</li>
                            <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://aiweek.com" target="_blank" rel="noopener noreferrer" className={styles.socialicons}>FACEBOOK</a></li>
                            <li><a href="https://www.linkedin.com/shareArticle?mini=true&url=https://aiweek.com" target="_blank" rel="noopener noreferrer" className={styles.socialicons}>LINKEDIN</a></li>
                            <li><a href="https://twitter.com/intent/tweet?url=https://aiweek.com&text=" target="_blank" rel="noopener noreferrer" className={styles.socialicons}>X</a></li>
                            <li><a href="https://instagram.com/scoopnewsgroup" target="_blank" rel="noopener noreferrer" className={styles.socialicons}>INSTAGRAM</a></li>
                            <li><a href="https://aiweek.com/2024" target="_blank" rel="noopener noreferrer" className={styles.socialicons}><span className="aigreen">AI</span>WEEK 2024</a></li>
                        </ul>
                    </div>


                </div>
                <div className={styles.clearout}></div>
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
    publicationUrl: `https://www.aiweek.com`,
}
export default Footer
