import { createContext } from "react";

interface DispatchProps {
  [key:string]:string;
  action:string;
}

interface TrackingContextProps {
  process: () => void;
  version?: string;
  trackingData:any[];
  dispatch: (data:DispatchProps) => void;
}

const dispatchTrackingEvent = (data:DispatchProps) => {
  const eventId = `${process.env.GATSBY_EVENT_ID}`
  if (Object.keys(data).length > 0) {
    (window.dataLayer = window.dataLayer || []).push({eventId: eventId, ...data});
  }
};

export const TrackingContext = createContext<TrackingContextProps>({
  version: "0.1.0",
  trackingData: [],
  dispatch:dispatchTrackingEvent,
  process: () => console.log("processing")
});
