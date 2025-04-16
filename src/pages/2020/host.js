import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layoutb from "../../components/layoutb"

import "../../style/main.scss"

import Host from "../../components/host"
import Hostreasons from "../../components/hostreasons"
import Hostparallax from "../../components/hostparallax"
import Hostform from "../../components/hostform"

const HostPage = () => {

    return (
        <Layoutb>
            <Host />
            <Hostreasons />
            <Hostparallax />
            <Hostform
                portalId = "2153467"
                formId = "110f4d56-95e7-4dfc-bb2f-f06c86306491"
                >
                
                <p>
                Submit your event to secure your place on our official CyberWeek calendar! Once your event is confirmed, your event will secure its place on our CyberWeek schedule builder that attendees will use to build out their CyberWeek schedules.  A CyberScoop event specialist will be in touch with next steps upon event submission.
                </p>
            </Hostform>
        </Layoutb>
    )
}

export default HostPage