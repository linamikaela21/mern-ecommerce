import { combineReducers } from "redux"
import { authReducers } from './auth.reducers'
import userReducers from "./user.reducers"

export const rootReducer = combineReducers({
    auth: authReducers,
    user: userReducers
})
  export default rootReducer