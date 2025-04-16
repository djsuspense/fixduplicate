import React, { useState, useEffect } from 'react'
import styles from './registerButton.module.scss'
export default ({ disabled, onClick, registered }) => {
  let [state, updateState] = useState(`${registered?"Registered":"Register"}`)
  
  const handleOnClick = (event) => {
    state != 'Registered' && updateState(state='Registering')
    state != 'Registered' && onClick && onClick(event)
  }

  useEffect( ()=> {
    if(state != 'Registering'){ return }
    const timer = setTimeout(() => updateState(state='Registered'),3000)
    return () => clearTimeout(timer)
  }, [state])
  
  useEffect( () => {
    if(registered){
      updateState('Registered')
    }
  }, [registered])
  return <>
    <button disabled={disabled} onClick={handleOnClick} className={`${styles.buttonReg} ${state}`}><img src="https://s3.amazonaws.com/sng-global-web-assets/images/ai-calendar/loading.gif" className="loadgif"/><img src="https://s3.amazonaws.com/sng-global-web-assets/images/ai-calendar/checkmark.png" className="checkmark"/><span className="loadstate">{state}</span></button>
  </>
}