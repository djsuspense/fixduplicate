import { useEffect } from 'react'
import { useScript } from './'

export default (options) => {
    const status = useScript('https://www.eventbrite.com/static/widgets/eb_widgets.js')
    useEffect( () => {
        if (status === "ready") {
            if(typeof window !== `undefined`){
                let { modalTriggerElementId } = options
                if( modalTriggerElementId ) {
                    let span = document.createElement("span")
                    span.id = modalTriggerElementId
                    document.body.appendChild(span)
                }
                window.EBWidgets.createWidget(options)
            }
        }
    }, [status])
}