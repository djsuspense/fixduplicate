import React, {useEffect, useState} from "react"
import ReactModal from 'react-modal'
import styles from "./attend.css"
import anime from 'animejs/lib/anime.es.js';

const Attend = ( { sponsors, description }) => {

    const [learnMoreModalState,setLearnMoreModalState] = useState(false)
    const [animation, setAnimation] = useState()
    const [animationPlayed, setAnimationPlayed] = useState(false)

    const showLearnMoreModal = () => setLearnMoreModalState(true)
    const hideLearnMoreModal = () => setLearnMoreModalState(false)

    
    return (
       
        <section className="attend" id="Attend">
            <div className="containfix">
                <div className="grid6040">
                    <div className="g1">
                        <h1>ATTEND</h1>
                        <h2>Be a Part of the Cyber Community!</h2>
                        
                        
                        
                    </div>
                    <div className="g2">
                        
                    </div>
                    <div className="g3">
                    <hr className="abdivide" />
                        <p>Join thousands of cyber leaders to get informed and expand your professional network at 100+ interactive digital sessions taking place during U.S. CyberWeek! Sessions are hosted by tech giants, government agencies, academia, policy makers, start-ups and more.
</p>
<a className="reg" id="eventbrite-widget-modal-trigger-79004985037">REGISTER NOW</a>
                    </div>
                    <div className="g4">
                        
                        
                    </div>
                    <div className="g5">
                    
                        
                    </div>
                </div>       

            </div>
            
        </section>
        
    )
}

export default Attend