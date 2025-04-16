export {
  register,
  logInWithEmail,
  logOut,
  currentUser,
  currentSession
} from './auth'

export { dispatchAuthEvent, eventListener } from "./hub"
// export { trackEvent, getRegisteredEvents } from './api'

export { getProfile, trackMetric, trackPageview, getPlaylist } from "./api"