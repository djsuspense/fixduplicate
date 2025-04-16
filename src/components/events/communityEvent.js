import React, { useState } from 'react'
import styles from './communityEvent.module.scss'
import RegisterButton from './registerButton'

export default ({
  category,
  date,
  registration_url,
  altbtntext,
  title,
  description,
  speakers=[],
  image,
  disabled = false,
  onRegister,
  listId,
  slug,
  registered=false
}) => {
  const [toggleButtonState, updateToggleButtonState] = useState()
  const newDate = new Date(date)
  let startHours= newDate.getHours();
  let startMinutes= newDate.getMinutes();
  let newformat = startHours >= 12? 'PM': 'AM';
  startHours = startHours % 12;
  startHours = startHours ? startHours : 12;
  startMinutes = startMinutes < 10 ? '0' + startMinutes : startMinutes;
  let startTime = startHours +':'+ startMinutes +' '+ newformat + ' EDT';
  let initialState="up";

  const handleToggleButtonClick = (state) => {
    updateToggleButtonState(state)
  }

  const handleRegisterButtonClick = (event) => {
    onRegister && onRegister({title, category, registration_url, listId, slug})
  }

  return <div className={`${styles.wrapper} ${disabled?styles.disabled:''} wrapCom`}>
    <div className={styles.time}>{startTime} <span className={styles.mobileCategory}> | {category}</span></div>
    <div className={`${styles.connector} connectCom`}>
      
      <div className={styles.box}></div>
      <div className={styles.lineconnector}></div>
    </div>

    <div className={`${styles.header} ${category}`}>
      {image && <img src={image} alt={title} />}
      <h3>{category}</h3>
      <h4>{title}</h4>
      {registration_url!="checkmark" && registration_url!="" && <button disabled={disabled} onClick={handleRegisterButtonClick} className={`${styles.eventRegister} ${category}`} onClick={ ()=> window.open(registration_url,'_blank') }>{`${altbtntext?altbtntext:'Register'}`}</button>}
      {registration_url!="checkmark" && registration_url=="#" && <button disabled={disabled} className={`${styles.eventRegister} ${category}`}>{`${altbtntext?altbtntext:'Register'}`}</button>}
      {registration_url=="checkmark" && <RegisterButton registered={registered} disabled={disabled} onClick={handleRegisterButtonClick} {...{category,registration_url, title}} />}
      {description!="" && <ToggleButtons initialState={initialState} disabled={disabled} onClick={handleToggleButtonClick} />}
    </div>

    {toggleButtonState && toggleButtonState === 'down' && <div className={`${styles.body} ${category}`}>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      {speakers!="" && <div className={styles.speakers}>
      {speakers.map((speaker, index) => {
      return (<div key={index} className={styles.speakerContain}>
        <img src={speaker.image} className={styles.speakerImage}/>
        <div className={styles.bio}>
          <span className={styles.name}>{speaker.name}</span><br />
          <span className={styles.title}>{speaker.title}</span><br />
          <span className={styles.company}>{speaker.company}</span><br />
        </div>
      </div>)
    })}
        
      </div>}
    </div>}
    <div className={styles.eventSeparator}></div>
  </div>
}

const ToggleButtons = ({initialState, disabled, onClick}) => {
  const [ state, setState] = useState(initialState)
  const handleOnClick = (newState) => {
    onClick && onClick(newState)
    setState(newState)
  }
  return (
  <div className={`${styles.toggle_btns}`}>
    <button disabled={disabled} className={`${state === 'up'?styles.toggle_btns_hide:{}}`} onClick={() => handleOnClick('up')}><img src="https://s3.amazonaws.com/sng-global-web-assets/images/ai-calendar/ArrowUp.png" alt="up" className={styles.ArrowUpBase} /><img src="https://s3.amazonaws.com/sng-global-web-assets/images/ai-calendar/ArrowUp_Hover.png" className={styles.ArrowUpHover} /></button>
    <button disabled={disabled} className={`${state === 'down'?styles.toggle_btns_hide:{}}`} onClick={() => handleOnClick('down')}><img src="https://s3.amazonaws.com/sng-global-web-assets/images/ai-calendar/ArrowDown.png" alt="down" className={styles.ArrowDownBase} /><img src="https://s3.amazonaws.com/sng-global-web-assets/images/ai-calendar/ArrowDown_Hover.png" alt="downhover" className={styles.ArrowDownHover} /></button>
  </div>
  )
}