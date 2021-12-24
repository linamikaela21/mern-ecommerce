import { combineReducers } from "redux"
import  categoryReducers  from "./category.reducers"

export const rootReducer = combineReducers({
    categories: categoryReducers,

})
  export default rootReducer