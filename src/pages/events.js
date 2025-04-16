import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import { Select } from "../components/collapsibles"
import CommunityAbout2021 from "../components/communityabout2021"
import { CommunityEvents } from '../components/events'
import Footer2021 from "../components/footer2021"
import { CommunityEventAccessForm } from "../components/forms"
import Layout2021b from "../components/layout2021b"
import SignatureEvents from "../components/signatureEvents"
import {
  currentUser,
  getRegisteredEvents,
  logOut,
  trackMetric,
} from "../services"
import "../style/main.scss"
import "./events.css"
import localEventsData from './events.json'

const CommunityPage = ({ data }) => {
  const [communitiyEvents, setCommunityEvents] = useState([])
  const [filteredCommunitiyEvents, updatedFilteredCommunityEvents] = useState([])
  const [user, setUser] = useState()
  const [sortEventDate, updateSortEventDate] = useState('full week')
  const [sortEventTypes, updateSortEventTypes] = useState([])
  const [registeredEvents, updateRegisteredEvents] = useState([])
  const [userIgnored, setUserIgnoreState] = useState(false)
  const { allIgnoreListCsv: { ignoreList } } = data

  const trackCommunityEventRegistration = (payload) => {
    trackMetric({
    metricType:"communityEventRegistration",
    payload
  })
}

  const handleOnDayChange = (newValue) => {
    if(!newValue){ return }
    newValue.length > 0 && updateSortEventDate(newValue[0])
    newValue.length == 0 && updateSortEventDate('full week')
  }

  const handleOnEventTypeChange = (newValues) => {
    if(!newValues){ return }
    updateSortEventTypes(newValues)
  }

  const handleAccessFormSuccess = (user) => {
    setUser(user)
  }

  const handleAccessFormFailure = (message) => setUser(null)

  const handleLogOffClick = (event) => {
    event.preventDefault()
    logOut()
    .then( resp => {
      setUser(null)
    })
    .catch( error =>  console.log(error))
  }

  const handleOnEventRegister = ({ listId, ...event }) => { // return event data
    // console.log('handleOnEventRegister.rest', event)
    if(!user){
      currentUser()
      .then( user => {
        let { username } = user
        trackCommunityEventRegistration({...event, username,listIds:[listId]}) // fix asap
      })
      .catch( error => console.error(error))
    } else {
      let { username } = user
      trackCommunityEventRegistration({...event, username,listIds:[listId]}) // fix asap
    }
  }

  const handleOnThankYouFormSubmit = ({selectedEvents, userEmail}) => {  // return  data
    // console.log('handleOnThankYouFormSubmit', user)
    const listIds = [...new Set(selectedEvents.map( event => parseInt(event.listId) ))]
    if(!user){ 
      currentUser()
      .then( user => {
        let { username } = user
        setUser(user)
        selectedEvents && selectedEvents.map( event => {
          trackCommunityEventRegistration({...event, username, listIds: [event.listId]})
        })
      })
      .catch( error => console.error(error))
    } else {
      let { username } = user
      selectedEvents && selectedEvents.map( event => {
        trackCommunityEventRegistration({...event, username, listIds: [event.listId]})
      })
    }
  }
  
  const handleOnThankYouFormDisable = () => {
    currentUser()
    .then( user => {user && setUser(user)})
    .catch( error => console.error(error))
  }
  
  // fetch events
  useEffect(() => {
    fetch(`https://aiweek.com/data`)
      .then(response => response.json())
      .then(events => {
        // add registered properties
        setCommunityEvents(events)
        updatedFilteredCommunityEvents(events)
      })
      .catch( error => {
        console.error(error,'Failed to fetch events. Switching to local event data.')
        setCommunityEvents(localEventsData)
        updatedFilteredCommunityEvents(localEventsData)
      })
  }, [])

  // set user and validate with ignoreList
  useEffect( () => {
    if(!user){
      // console.log('user is null. attempting to get currentUser()')
      currentUser()
      .then( user => {user && setUser(user)})
      .catch( error => console.error(error))
    } else {
      // if user already logged in, check ignore list
      const { username } = user
      ignoreList && ignoreList.map( ignoredUser => {
        // console.log('ignoredUser', ignoredUser)
        if(ignoredUser.email && ignoredUser.email.includes(username)){
          setUserIgnoreState(true)
          throw new Error('user not allowed')
        }
      })
    }
  }, [user])
  
  // fetch registered sessions
  useEffect(()=> {

    if(!user){
      currentUser()
      .then( user => {
        let { username } = user
        getRegisteredEvents && getRegisteredEvents({ username } )
        .then( data => updateRegisteredEvents(data.map( event => event.slug)))
        .catch( error => console.error(error))
      })
      .catch( error => console.error(error))
    } else {
      if(registeredEvents.length > 0 ){ return }
      let { username } = user
      getRegisteredEvents && getRegisteredEvents({ username } )
      .then( data => updateRegisteredEvents(data.map( event => event.slug)))
      .catch( error => console.error(error))
    }
  }, [user])

  // filter community events by date and category
  useEffect( () => {
    let filteredEvents = communitiyEvents.filter( event => {
      const date = new Date(event.date)
      const weekDay = date.toLocaleDateString('us', { weekday: 'long' })
      // console.log('src/pages/events.js.useEffect-filters', {eventDate:event.date, event, date,weekDay})
      let matchEventDate = sortEventDate === 'full week' || weekDay.toLowerCase() === sortEventDate
      const matchEventCategory = sortEventTypes.length == 0 || sortEventTypes.includes(event.category)
      return matchEventDate && matchEventCategory
    })

    updatedFilteredCommunityEvents(filteredEvents)
  }, [communitiyEvents, sortEventDate, sortEventTypes])

  return (
    <Layout2021b>
      <a id="CommunityEvents"></a>
      <CommunityAbout2021 />
      <SignatureEvents />
      <section id="commEvents" className="commbgwhite">
      <div className="containfix">
        <div>
          {/* <h1 className="communityabout2021">CALENDAR COMING SOON</h1><br /><br /><br /><br /><br /><br /><br /> */}
          <h1 className="communityabout2021">REGISTER FOR <span className="aigreen">AI</span> WEEK EVENTS</h1>
          <h3 className="coming-soon" style={{display: 'none'}}>Community events will be coming soon!</h3>
          {userIgnored && <div>Sorry, registration is currently unavailable.</div>}
          {!user && !userIgnored && <CommunityEventAccessForm
            ignoreList={ignoreList} 
            enableThankYouForm={true}
            registeredEventSlugs={registeredEvents}
            onSuccess={handleAccessFormSuccess} 
            onFailure={handleAccessFormFailure} 
            onThankYouFormSubmit={handleOnThankYouFormSubmit}
            onThankYouFormDisable={handleOnThankYouFormDisable} 
          />}
          {user && <pre>Hi {user.username} <button onClick={handleLogOffClick}>Logoff</button></pre>}
          <div className="eventswrap">
            <div className="sort fields">
              <Select
                disabled={!user}
                title="SORT BY DAY OF WEEK"
                onChange={handleOnDayChange}
                type="day"
                options={[
                  { name: "monday", value: "monday" },
                  { name: "tuesday", value: "tuesday" },
                  { name: "wednesday", value: "wednesday" },
                  { name: "thursday", value: "thursday" },
                  { name: "friday", value: "friday" },
                  { name: "full week", value: "full week" },
                ]} />

              <Select
                disabled={!user}
                multiSelect
                title="SORT BY TYPE OF EVENT"
                onChange={handleOnEventTypeChange}
                type="events"
                options={[
                  { name: "In-Person", color: "conTeal", value:"in-person" },
                  { name: "Virtual", color: "webGreen", value:"virtual" },
                  { name: "Hybrid", color: "panYellow", value:"hybrid" },
                  // { name: "Signature Events", color: "sigBlue", value:"signature events" },
                  // { name: "Twitter Chat", color: "twitterBlue", value:"twitter chat" },
                  // { name: "Podcast", color: "panYellow", value:"podcast" },
                  // { name: "Networking", color: "netPink", value:"networking" },
                  // { name: "Demo", color: "demoBlue", value:"demo" },
                  // { name: "Roundtable", color: "roundOrange", value:"roundtable" },
                  // { name: "Class", color: "classPurple", value:"class" },
                  // { name: "Competition", color: "compGreen", value:"competition" },
                  // { name: "Cyber Spotlight Series", color: "aiPurple", value:"cyber spotlight series" },
                  // { name: "Career Fair", color: "careerMagenta", value:"career fair" },
                ]} />
            </div>
          </div>
              <CommunityEvents events={filteredCommunitiyEvents} disabled={!user} onEventRegister={handleOnEventRegister} registeredEventSlugs={registeredEvents} />
        </div>
      </div>
      </section>
      <Footer2021 />
    </Layout2021b>
  )
}

export default CommunityPage

export const query = graphql`
 query CommunityEventsQuery {
  allIgnoreListCsv {
    ignoreList: nodes {
      company
      email
      first_name
      last_name
    }
  }
}
`
