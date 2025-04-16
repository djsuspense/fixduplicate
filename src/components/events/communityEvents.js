import React from 'react'
import CommunityEvent from "./communityEvent"
import styles from './communityEvents.module.scss'

export const CommunityEvents = ({ events, disabled, onEventRegister, registeredEventSlugs=[] }) => {
  return <section className={`${styles.wrapper} ${disabled?styles.disabled:''}`}>
    <div className="exWrap">
       <div className={styles.dayofweek}><span></span><span>Monday, April 21</span></div>
      {events && events.map( (event, index) => {
        return event.date.slice(0,-6) =="2025-04-21" && <CommunityEvent 
        key={index}
        {...event}
        disabled={disabled} 
        onRegister={onEventRegister} 
        registered={registeredEventSlugs.includes(event.slug)}
        />
      })}
    </div>
    <div className="exWrap">
      <div className={styles.dayofweek}><span></span><span>Tuesday, April 22</span></div>
      {events && events.map( (event, index) => event.date.slice(0,-6) =="2025-04-22" && <CommunityEvent key={index} disabled={disabled} onRegister={onEventRegister} {...event} registered={registeredEventSlugs.includes(event.slug)}/>)}
    </div>
    <div className="exWrap">
      <div className={styles.dayofweek}><span></span><span>Wednesday, April 23</span></div>
      {events && events.map( (event, index) => event.date.slice(0,-6) =="2025-04-23" && <CommunityEvent key={index} disabled={disabled} onRegister={onEventRegister} {...event} registered={registeredEventSlugs.includes(event.slug)}/>)}
    </div>
    <div className="exWrap">
      <div className={styles.dayofweek}><span></span><span>Thursday, April 24</span></div>
      {events && events.map( (event, index) => event.date.slice(0,-6) =="2025-04-24" && <CommunityEvent key={index} disabled={disabled} onRegister={onEventRegister} {...event} registered={registeredEventSlugs.includes(event.slug)}/>)}
    </div>
    <div className="exWrap">
      <div className={styles.dayofweek}><span></span><span>Friday, April 25</span></div>
      {events && events.map( (event, index) => event.date.slice(0,-6) =="2025-04-25" && <CommunityEvent key={index} disabled={disabled} onRegister={onEventRegister} {...event} registered={registeredEventSlugs.includes(event.slug)}/>)}
    </div>
  </section>
}