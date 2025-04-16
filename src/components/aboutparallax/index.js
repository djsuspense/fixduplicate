import React, {useEffect, useState} from "react"
import ReactModal from 'react-modal'
import styles from "./aboutparallax.css"
import anime from 'animejs/lib/anime.es.js';


const Aboutparallax = ( { sponsors, description }) => {

    const [learnMoreModalState,setLearnMoreModalState] = useState(false)
    const [animation, setAnimation] = useState()
    const [animationPlayed, setAnimationPlayed] = useState(false)

    const showLearnMoreModal = () => setLearnMoreModalState(true)
    const hideLearnMoreModal = () => setLearnMoreModalState(false)

    
    return (
        <section className="hparallax" id="Aboutparallax">
            <h1 className="seefirst">NETWORK</h1>
            <h2 className="slash">/</h2>
            <h1>LEARN</h1>
            <h2 className="slash">/</h2>
            <h1>COLLABORATE</h1>
        </section>
        
    )
}

export default Aboutparallax