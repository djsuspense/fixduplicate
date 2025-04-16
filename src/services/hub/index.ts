import { Hub } from 'aws-amplify';
import { AllowedChannels, AllowedEventNames, HubConstants } from "../../constants";

let logger: any = console // fallback so SSR won't crash

if (typeof window !== "undefined") {
  const { Logger } = require("aws-amplify") // or dynamic import
  logger = new Logger("MyHubLogger")
}

export default logger

export interface dispatchPayloadProps {
  eventName: string
  data?: any
  message?: string
}

export interface dispatchEventProps {
  channelName: string
  payload: dispatchPayloadProps
}

export interface channelListenerProps {
  channelName: string
}

export const dispatchEvent = ({ channelName, payload: { eventName, ...payload } }: dispatchEventProps) => {
  if (!AllowedEventNames.includes(eventName)) {
    throw new Error(`${eventName} event not allowed`)
  };
  if (!AllowedChannels.includes(channelName)) {
    throw new Error(`${channelName} channel not allowed`)
  };
  Hub.dispatch(
    channelName,
    {
      event: eventName,
      ...payload
    }
  );
  logger.info('dispatched', { channelName, eventName, ...payload })
}

export const dispatchAuthEvent = (payload: dispatchPayloadProps) => {
  const { ChannelName: channelName } = HubConstants.Channels.EventAuth
  dispatchEvent({
    channelName,
    payload
  })
}

export const eventListener = ({ channelName }: channelListenerProps) => {

  return new Promise((resolve, reject) => {
    Hub.listen(channelName, (data) => {
      if (!data) { reject(`Error while listening to ${channelName} channel`) }
      else {
        resolve(data)
      }
      logger.info(`eventListener.${channelName}`, data)
    })
  })
}
