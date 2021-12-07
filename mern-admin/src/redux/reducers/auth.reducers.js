import { authConstants } from '../actions/constants'

const initialState = {
  token: null,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    picture: ''
  },
  authenticate: false,
  authenticating: false,
  error: null,
  message: '',
  logging: false
}

export const authReducers = (state = initialState, action) => {

  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true
      }
      break

    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false
      }
      break

    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        logging: true
      }
      break

    case authConstants.LOGOUT_SUCCESS:
      state = { ...initialState }
      break

    case authConstants.LOGOUT_FAIL:
      state = {
        ...state,
        logging: false,
        error: action.payload.error
      }
      break

    default:
      return state
  }

  return state
}

export default authReducers