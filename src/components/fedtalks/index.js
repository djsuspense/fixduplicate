import React, {useEffect, useState} from "react"
import ReactModal from 'react-modal'
import styles from "./fedtalks.css"
import anime from 'animejs/lib/anime.es.js';

const Fedtalks = ( { sponsors, description }) => {

    const [learnMoreModalState,setLearnMoreModalState] = useState(false)
    const [animation, setAnimation] = useState()
    const [animationPlayed, setAnimationPlayed] = useState(false)

    const showLearnMoreModal = () => setLearnMoreModalState(true)
    const hideLearnMoreModal = () => setLearnMoreModalState(false)

    
    return (
        <section className="fedtalks" id="Cybertalks">
            <div className="containfix">
                <div className="grid6040">
                    <div className="g1">
                        <h1>CYBERTALKS</h1>
                        
                        <hr className="abdivide" />
                        <p>CyberTalks is the largest annual gathering of CISOs and top cyber leaders from tech, gov, academia and finance. During these unprecedented times, the necessity to come together has never been greater. <br /><br />

                    As the flagship event of U.S. CyberWeek — a weeklong annual cyber festival hosted by CyberScoop from October 19-23, our 6th Annual CyberTalks will be a digital experience featuring talks from the biggest national names in cyber and tech.<br /><br />

CyberTalks will showcase influential leaders for daily lightning talks, keynotes and fireside chats all week that will explore how the security leadership community is revolutionizing the way we protect against and overcome all the threats facing our nation. </p>
                        <a className="reg" href="https://www.eventbrite.com/e/cybertalks-2020-registration-113146163220" target="_blank" rel="noreferrer">REGISTER FOR CYBERTALKS</a>
                        <a className="reg" href="https://www.cyberscoop.com/events/cybertalks" target="_blank" rel="noreferrer">LEARN MORE</a>
                        <h2 className="followInline">Follow Us <span className="pinkify">#CyberTalks</span></h2>
                    </div>
                    <div className="g2">
                        
                    </div>
                    
                   
                </div>       

            </div>
            
        </section>
        
    )
}

export default Fedtalks