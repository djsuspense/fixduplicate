import React, {useEffect, useState} from "react"
import ReactModal from 'react-modal'
import styles from "./about.css"
import anime from 'animejs/lib/anime.es.js';

const About = ( { sponsors, description }) => {

    const [learnMoreModalState,setLearnMoreModalState] = useState(false)
    const [animation, setAnimation] = useState()
    const [animationPlayed, setAnimationPlayed] = useState(false)

    const showLearnMoreModal = () => setLearnMoreModalState(true)
    const hideLearnMoreModal = () => setLearnMoreModalState(false)

    /*const handleScroll = () => {
        let offset = window.document.getElementById("About").getElementsByClassName("date")[0].offsetTop
        let startPoint = offset - window.scrollY
        if( startPoint <= 380 && !animationPlayed){
            animation.play()
            setAnimationPlayed(!animationPlayed)
        }
    }
    useEffect( ()=>{
        setAnimation(anime.timeline({
            targets: ['section.about .date', 'section.about .location'],
            easing: 'cubicBezier(.5, .05, .1, .3)',
            autoplay: false
        })
        .add({
            translateX: [999, 0],
            duration: 800,
            delay: anime.stagger( 100 ),
        })
        )
    }, [])
    useEffect( () => {
        window.addEventListener( 'scroll', handleScroll)
        return () => {
            window.removeEventListener( 'scroll', handleScroll)
        }
    })*/
    return (
        <section className="about" id="About">
            <div className="containfix">
                <div>
                    <div>
                        
                        <p className="underabout">{/*description*/}U.S. CyberWeek is a weeklong annual cyber festival hosted by CyberScoop October 19-23, 2020. This year U.S. CyberWeek will be a digital experience featuring hundreds of national community events engaging the tens of thousands of people from the cybersecurity community and C-suite leaders from tech, gov and academia who will come together to exchange information, share best practices and discuss the many ways we can revolutionize the way we protect against and overcome cyberthreats facing our nation. </p>
                        
                        
                        
                    </div>
                    <div className="grid25">
                        <div className="value">
                            $500B<br />
                            <p>Cybersecurity Budget Influencers</p>
                        </div>
                        <div className="value">
                            10K+<br />
                            <p>Attendees</p>
                        </div>
                        <div className="value">
                            180+<br />
                            <p>Fortune 500 Companies and Government Agencies</p>
                        </div>
                        <div className="value">
                            100+<br />
                            <p>Community Events</p>
                        </div>
                    </div>
                    <div className="column grid2">
                        
                        <ReactModal 
                            className={styles.learnMoreModal}
                            overlayClassName="learnMoreOverlay"
                            isOpen={learnMoreModalState}
                            contentLabel="Navigation"
                            onRequestClose={hideLearnMoreModal}
                            aria={{
                                labelledby: "Navigation",
                                describedby: "Website navigation items"
                            }}
                            shouldReturnFocusAfterClose={false}
                            shouldFocusAfterRender={false}>
                        
                            <button className={styles.closeLearnMoreBut} onClick={hideLearnMoreModal}>&times;</button>
                            <div className={styles.menuWrap}>
                                <b>U.S. CyberWeek 2020</b> attendees are eligible to receive continuing professional education (CPE) credits. 
                                Attendees can earn a maximum of 4 CPE credits in information technology.<br /><br />

                                In order to verify your CPEs, please document your name on the CPE attendance sheet located at the registration desk onsite. Be sure to return to the registration desk to document your time out. If sign in and/or sign out times are not documented, FedScoop is unable to verify your attendance and therefore cannot award CPE credit. Additional details:
                                <br /><br />
                                <img src="https://www.fedscoop.com/events/data-cloud-summit/assets/images/cperegistry_logo.jpg" className="cpe-logo" />
                                Delivery Method: Group-Live
                                <br />
                                Program Level: Intermediate
                                <br />
                                Prerequisites: Recommend previous experience in IT and technology
                                <br />
                                Advance Preparation: No advance preparation necessary
                                <br />
                                Contact <a href="mailto:beka.troutman@scoopnewsgroup.com" className="cpe-mail">Beka Troutman</a> 
                                &nbsp;for details on obtaining CPE credits at the event.
                                <br /><br />
                                Scoop News Group is registered with the National Association of State Boards of Accountancy 
                                (NASBA) as a sponsor of continuing professional education on the National Registry of CPE Sponsors. 
                                State boards of accountancy have final authority on the acceptance of individual courses for CPE credit. 
                                Complaints regarding registered sponsors may be submitted to the National Registry of 
                                CPE Sponsors through its website: www.learningmarket.org
                            </div>
                        </ReactModal>
                    </div>
                    
                </div>
            </div>
            
        </section>
        
    )
}

export default About