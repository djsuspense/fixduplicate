import { useContext, useMemo } from "react"
import { TrackingContext } from "./trackingContext"

export default () => {
    const trackingContext = useContext(TrackingContext)
    if (!(trackingContext)) {
        throw new Error(
            'Attempting to call `useTracking` ' +
            'without a ReactTrackingContext present. Did you forget to wrap the top of ' +
            'your component tree with `track`?'
        );
    }

    return useMemo(
        () => ({
            trackEvent: trackingContext.dispatch
        }),
        [
            trackingContext.dispatch
        ]
    )
}
