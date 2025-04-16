import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Layout2021b from "../components/layout2021b"

import "../style/main.scss"

import SponAbout2021 from "../components/sponabout2021"
import MoreNumbers from "../components/morenumbers"
import Footer2021 from "../components/footer2021"

const SponsorPage = () => {

    return (
        <Layout2021b>
            <SponAbout2021 />
            <MoreNumbers />
            <section className="sponpage">
            <div className="containfix">
                <a className="hostBTN" href="https://sng-global-web-assets.s3.us-east-1.amazonaws.com/images/ai-week/2025/2025_AIWeek_Sponsorships.pdf" target="_blank" rel="noopener noreferrer">SPONSOR AI WEEK</a>
                <a className="hostBTN" href="mailto:sales@scoopnewsgroup.com?subject=AI Week 2025 - Sponsorship" target="_blank" rel="noopener noreferrer">CONTACT US</a>
            </div>
            </section>
            <Footer2021 />
        </Layout2021b>
    )
}

export default SponsorPage