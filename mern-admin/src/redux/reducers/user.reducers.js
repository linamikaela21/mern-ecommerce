import { userContants } from '../actions/constants'

const initialState = {
  error: null,
  message: '',
  loading: false
}

export const userReducers = (state = initialState, action) => {

  switch (action.type) {
    case userContants.USER_REGISTER_REQUEST:
      state = {
        ...state,
        loading: true
      }
      break

    case userContants.USER_REGISTER_SUCCESS:
      state = {
        ...state,
        loading: true,
        message: action.payload.message
      }
      break

    case userContants.USER_REGISTER_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error
      }
      break

    default:
      return state
  }

  return state
}

export default userReducers