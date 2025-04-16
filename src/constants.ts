export const HubConstants = {
  Channels: {
    EventAuth: {
      ChannelName: "EventAuth",
      Events: [
        "login",
        "register",
        "logout",
      ]
    }
  }
}

export const AllowedEventNames = [
  "login",
  "register",
  "logout",
]

export const AllowedChannels = [
  "EventAuth"
]
