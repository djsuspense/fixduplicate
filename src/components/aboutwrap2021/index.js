import React, {/*useEffect, */useState} from "react"
import ReactModal from 'react-modal'
import styles from "./about.css"
// import anime from 'animejs/lib/anime.es.js';


const About = ( { sponsors, description }) => {

    const [learnMoreModalState,setLearnMoreModalState] = useState(false)
    // const [animation, setAnimation] = useState()
    // const [animationPlayed, setAnimationPlayed] = useState(false)

    // const showLearnMoreModal = () => setLearnMoreModalState(true)
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
        <section className="aboutwrap2021" id="About">
            <div className="containfix">
                <div>
                    <div>
                        <h1> <span className="bluedup">CYBER</span>WEEK COMMUNITY EVENTS</h1>
                        <p className="underaboutwrap2021">Top cybersecurity leaders across the government, industry, academia and non-profit sectors hosted over 50 community events during CyberWeek including interactive sessions, talks, demos, networking opportunities and more, sharing exclusive insights on the latest in cybersecurity.</p>

                        <h1>SNG LIVE</h1>
                        <p className="underaboutwrap2021">During CyberWeek, Scoop News Group hosted two engaging SNG Live sessions with top cybersecurity leaders across government, education and industry: <a href="https://upgather.com/snglive/securing-state-local-higher-ed/live" target="_blank" className="bluedup" rel="noreferrer">Securing State, Local & Higher Ed</a> and <a href="https://upgather.com/snglive/modernizing-federal-cybersecurity/live" target="_blank" className="bluedup" rel="noreferrer">Modernizing Federal Cybersecurity</a>.</p>
                        <h1>CYBERWEEK SPOTLIGHT SERIES ON DEMAND</h1>
                        <p className="underaboutwrap2021">Watch our Cyber Spotlight Series sessions on demand <a href="https://cyberweek.us/live" className="bluedup">here</a>.</p>
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
                                <b>2020 IT Modernization Summit</b> attendees are eligible to receive continuing professional education (CPE) credits.
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
            {/*<div className="sponsormob-mod">
            <div className="grouplogos">
                        <h1>SPONSORS</h1>
                        <h2>Diamond</h2>
                        {sponsors && sponsors.map(
                            (sponsor, index) => <div key={index} className="logos">
                                <a href={sponsor.url} title={sponsor.name} target="_blank">
                                    <img src={sponsor.logo} alt={sponsor.name} width={sponsor.width} />
                                </a>
                            </div>
                        )}
                        </div>
            </div>
            <div className="sponsormob">
                <div className="containfix">

                    <h2 className="sponsor">BECOME A SPONSOR</h2>
                    <a className="pdf" href={sponpdf} target="_blank">DOWNLOAD PDF »</a>
                </div>
            </div>
            <div className="joinuswrap">
                <div className="joinus">

                    <div className="jtext">
                        JOIN<br />
                        US!
                    </div>
                    <div className="colcenter">

                    </div>
                    <div className="regcol">
                        <a className="regop" id="eventbrite-widget-modal-trigger-82648839905">REGISTER »</a>
                    </div>

                </div>
            </div>
                        */}
        </section>

    )
}

export default About