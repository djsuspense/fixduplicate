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
        <section className="about2021" id="About">
            <div className="containfix">
                <div>
                <div>
                        <h1>AISCOOP PRESENTS <span className="aigreen">AI</span> Week</h1>
                        <p className="underabout2021">AI Week is the nation's only week-long tech festival dedicated to artificial intelligence and its potential to transform the world we live in. During AI Week 2025, thousands of C-suite leaders from the government, tech and education communities across the U.S. will gather online and in person to participate in hundreds of community events, interactive sessions, lightning talks, networking opportunities and more for an exclusive look at the latest in the AI space.</p>
                        <hr className="greenline" />
                        <h1>WHY <span className="aigreen">AI</span> WEEK?</h1>
                        <p className="underabout2021">The age of AI is upon us. After decades of tussling with the realities of what artificial intelligence could one day be — and when it would materialize in our daily lives — the time has finally come. Following the explosion of generative AI and other consumer-friendly AI applications over the past year, artificial intelligence is rapidly transforming the way we live our lives, do business, communicate and experience the world around us. As the world grapples with important decisions on how to accelerate AI innovation and mitigate its risks, we must come together as a nation to chart a course forward as the leader in the responsible development of artificial intelligence. Join AIScoop and thousands of AI decision-makers and influencers at AI Week to be a part of this critical conversation.</p>
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
                                <b>2021 CyberWeek</b> attendees are eligible to receive continuing professional education (CPE) credits.
                                Attendees can earn a maximum of 4 CPE credits in information technology.<br /><br />

                                In order to verify your CPEs, please document your name on the CPE attendance sheet located at the registration desk onsite. Be sure to return to the registration desk to document your time out. If sign in and/or sign out times are not documented, FedScoop is unable to verify your attendance and therefore cannot award CPE credit. Additional details:
                                <br /><br />
                                <img alt="" src="https://www.fedscoop.com/events/data-cloud-summit/assets/images/cperegistry_logo.jpg" className="cpe-logo" />
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