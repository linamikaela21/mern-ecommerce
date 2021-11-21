import { combineReducers } from "redux"
import { authReducers } from './auth.reducers'

export const rootReducer = combineReducers({
    auth: authReducers
})
  export default rootReducer