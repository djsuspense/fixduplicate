import Amplify from 'aws-amplify'
require("./src/styles/multiDayTab.css")
require("./src/styles/styles.css")
Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_T4kwiOgU4',
    userPoolWebClientId: '6ishrs14mi58p1ll8n6r7ies9q',
    storage: localStorage
  }
})
