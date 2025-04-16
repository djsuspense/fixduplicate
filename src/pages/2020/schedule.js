import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layoutb from "../../components/layoutb"

import "../../style/main.scss"

import Attend from "../../components/attend"
import Schedule from "../../components/schedule"
import Opening from "../../components/opening"
import Scheduleparallax from "../../components/scheduleparallax"
import Fedtalks from "../../components/fedtalks"

const SchedulePage = () => {

    return (
        <Layoutb>
            <Attend />
            <Schedule />
            
            <Scheduleparallax />
            <Fedtalks />
        </Layoutb>
    )
}

export default SchedulePage