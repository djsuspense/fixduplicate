import React, { createContext, useContext } from "react"
import { currentUser } from "../services"

const value = {
  user: null,
  handleOnRegistrationClick: () => null,
  getUser: async () => await currentUser(),
}

const AuthContext = createContext(value)
const useAuth = () => useContext(AuthContext)

const withAuth = Component => props => {
  const auth = useAuth()
  return <Component {...props} auth={auth} />
}

const AuthProvider = ({ value, children }) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthProvider, useAuth, withAuth }
