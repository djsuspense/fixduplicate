import React, { useState, useEffect } from 'react'
import styles from './select.module.scss'
export default ({ 
  title = 'dropdown title', 
  options = [], 
  multiSelect = false, 
  enable = false,
  onChange,
  type= '',
  disabled=false
}) => {
  const [open, updateState] = useState(enable)
  const [selection, uptadeSelection] = useState([])

  const handleOnClick = (event) => updateState(!open)

  const handelOnOptionClick = (name) => {
    if (name) {
      if (selection.includes(name)) {
        uptadeSelection(selection.filter(selected => selected !== name))
        
      } else {
        let names = multiSelect ? [name, ...selection] : [name]
        uptadeSelection(names)
        updateState(!open)
      }
    }
  }

  useEffect( ()=> {
    onChange && onChange(selection)
  }, [selection])
  return <>
  <div className={`${styles.selectWrap}`}>
    
    <div className={`${styles.dropdown} ${disabled?styles.disabled:''}`}>
      <button disabled={disabled} onClick={handleOnClick}>
      {selection=="" && title}
      {type=="day" && selection}
    {options && options.map((option, index) => {
      return (<button key={index} disabled={disabled} className={`optionclose ${option.value.toLowerCase()} ${selection.includes(option.value) ? `${styles.selected}` : 'notSelected'}`} onClick={() => handelOnOptionClick(option.value)}>
        {option.value} <img src="https://s3.amazonaws.com/sng-global-web-assets/images/ai-calendar/selectX.png" className={`unselect`} alt="unselect" />
      </button>)
    })}
        <img className={`${open?styles.toggle_btns_hide:{}}`} src="https://s3.amazonaws.com/sng-global-web-assets/images/ai-calendar/ArrowDownFilter.png" alt="down" />
        <img className={`${open==""?styles.toggle_btns_hide:{}}`} src="https://s3.amazonaws.com/sng-global-web-assets/images/ai-calendar/ArrowUpFilter.png" alt="up" />
      </button>
    </div>
    {open && options && options.map((option, index) => {
      return (<button key={index} disabled={disabled} className={`${styles.option} ${selection.includes(option.value) ? `${styles.selected}` : ''}`} onClick={() => handelOnOptionClick(option.value)}>
        {option.color && <div className={`${styles.colorDot} ${option.color}`}></div>} {option.value}
      </button>)
    })}
    </div>
  </>
}