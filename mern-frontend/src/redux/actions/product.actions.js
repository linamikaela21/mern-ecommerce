import axios from "axios"
import { api } from '../../urlConfig'
import { productsContants } from './constants'

export const getProductsBySlug = (slug) => {
    return async dispatch => {
        dispatch({ type: productsContants.GET_PRODUCTS_BY_SLUG_REQUEST })
        const res = await axios.get(`${api}/products/${slug}`)
        if (res.status === 200) {
            console.log('RES =>',res);
            dispatch({ 
                type: productsContants.GET_PRODUCTS_BY_SLUG_SUCCESS,
                payload: res.data 
            })
        } else {
            dispatch({
                type: productsContants.GET_PRODUCTS_BY_SLUG_FAIL,
                payload: { error: res.data.error }
            })
        }
    }
}