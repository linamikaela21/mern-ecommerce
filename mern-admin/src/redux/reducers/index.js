import { combineReducers } from "redux"
import { authReducers } from './auth.reducers'
import { userReducers } from "./user.reducers"
import { productReducers } from "./product.reducers"
import { orderReducers } from "./order.reducers"
import { categoryReducers } from "./category.reducers"

export const rootReducer = combineReducers({
    auth: authReducers,
    user: userReducers,
    product: productReducers,
    order: orderReducers,
    category: categoryReducers
})
  export default rootReducer