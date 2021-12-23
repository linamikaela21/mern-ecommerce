import { combineReducers } from "redux"
import  authReducers  from './auth.reducers'
import userReducers  from "./user.reducers"
import  productReducers  from "./product.reducers"
import  orderReducers  from "./order.reducers"
import  categoryReducers  from "./category.reducers"

export const rootReducer = combineReducers({
    auth: authReducers,
    user: userReducers,
    categories: categoryReducers,
    products: productReducers,
    order: orderReducers
})
  export default rootReducer