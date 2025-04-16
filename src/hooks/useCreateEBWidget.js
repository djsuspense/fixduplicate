import { useState, useEffect } from "react"
import useScript from "./useScript"

const eventbriteOverlaySelector = '#eventbrite-widget-modal-overlay'

export default (options, onOrderComplete) => {
  // const [ EBWidgets, setEBWidgets ] = useState(null)
  // useEmbeddedScript("https://www.eventbrite.com/static/widgets/eb_widgets.js")
  const status = useScript("https://www.eventbrite.com/static/widgets/eb_widgets.js")
  
  useEffect( () => {
    const removeDuplicateModalOverlays = (selector) => {
      const iframes = document.querySelectorAll(`${selector}, ${eventbriteOverlaySelector}`)
      // keep first overlay and remove the rests
      if(iframes.length > 0){
        for (let index = 1; index < iframes.length; index++) {
          iframes[index].remove()
        }
      }
    }
    
    if (status === "ready") {
      const { iframeContainerId } = options
      iframeContainerId && removeDuplicateModalOverlays(iframeContainerId)
      if(typeof window !== `undefined`){

          window.EBWidgets.createWidget({
          ...options,
          onOrderComplete: onOrderComplete,
        })
      }
    }
  }, [status])
}