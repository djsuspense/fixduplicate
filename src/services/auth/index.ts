import { Auth } from "aws-amplify"
import { v4 as uuidv4 } from "uuid"
import { dispatchAuthEvent, trackMetric } from "../"
import { addContactToHubspotList } from "../api"
const eventId = process.env.GATSBY_EVENT_ID

export const generatePassword = () =>
  uuidv4()
    .replace(/\d{1}/, "G")
    .replace(/\d{1}/, "v")

export const register = async ({ formData, context }, onFailure: Function) => {
  if (!formData) {
    throw Error(
      `Expected SignUpFormData type but got underfined while signing up.`
    )
  }

  let { email, signUpItModWeek, hubspotFormDisabled, ...userData } = formData

  try {
    const params = {
      username: email.toLowerCase(),
      password: generatePassword(),
      clientMetadata: {
        eventId,
        ...userData,
        ...context,
      },
      validationData: [],
    }

    trackMetric({
      metricType: "registration",
      payload: {
        email,
        ...formData,
      },
    }),
      console.log("trust")
    await Auth.signUp(params)

    return logInWithEmail({ email }, () => {
      throw new Error(
        "Registration was completed but failed to auto sign-in. Please try to login."
      )
    })
  } catch (error) {
    if (error.code === "UsernameExistsException") {
      await Promise.all([
        trackMetric({
          metricType: "registration",
          payload: {
            email,
            ...formData,
          },
        }),
        addContactToHubspotList({ email, ...userData }),
      ])
      return logInWithEmail({ email }, () => {
        throw new Error(
          "Registration was completed but failed to auto sign-in. Please try to login."
        )
      })
    } else {
      console.error(error)
      onFailure && onFailure(error)
      return () => {
        throw new Error("testtesttest")
      }
    }
  }
}

export const logIn = async ({
  username,
  password,
}: {
  username: string
  password: string
}) => {
  return null
}

export const logInWithEmail = async (
  { email }: { email: string },
  onFailure: Function
) => {
  const params = {
    username: email.toLowerCase(),
    password: "",
    validationData: {
      eventId,
    },
  }

  const user = await Auth.signIn(params)

  if (!user) {
    throw new Error("")
  }
  user &&
    trackMetric({
      metricType: "login",
      payload: {
        email: email.toLowerCase(),
      },
    })
  return user
}

export const logOut = async () => {
  Auth.signOut()
    .then(returnObj => {
      dispatchAuthEvent({
        eventName: "logout",
        message: "User logged out",
      })
    })
    .catch(error => {
      console.log("error signing out: ", error)
    })
}

// export const currentUser = async (callback) => {
//   return Auth.currentAuthenticatedUser({
//     bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
//   }).then(user => {
//     callback(user);
//   }).catch((error) => {
//     callback(null);
//   });
// }

export const currentUser = async () => {
  return Auth.currentAuthenticatedUser({
    bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
  })
}
export const currentSession = async () => {}