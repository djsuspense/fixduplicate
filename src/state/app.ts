import { UserSession, ReducerAction } from "../components/interfaces"

const initialState = {
  isLoggedIn: false,
};

// action creator
const TOGGLE_LOGGED_IN = 'TOGGLE_LOGGED_IN'
const ADD_SESSION = 'ADD_SESSION'
const DELETE_SESSION = 'DELETE_SESSION'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

export const toggleLoggedIn = (isLoggedIn:boolean) => ({
  type: TOGGLE_LOGGED_IN, isLoggedIn
});

export const addSession = (session:UserSession) => ({
  type: ADD_SESSION, session
})

export const deleteSession = () => ({ type: DELETE_SESSION })

export const login = (session:UserSession)  => ({ type: LOGIN, session})
export const logout = () => ({ type: LOGOUT})

// reducer
export default (state = initialState, action:ReducerAction) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn:true, session:action.session};
    case LOGOUT:
    case DELETE_SESSION:
      return initialState;
    case TOGGLE_LOGGED_IN:
      return { ...state, isLoggedIn: action.isLoggedIn };
    case ADD_SESSION:
      return { ...state, session: action.session }
    default:
      return state;
  }
};