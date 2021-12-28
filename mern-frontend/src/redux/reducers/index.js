import { combineReducers } from "redux"
import  categoryReducers  from "./category.reducers"
import productsReducers from "./products.reducers"

export const rootReducer = combineReducers({
    categories: categoryReducers,
    products: productsReducers

})
  export default rootReducer