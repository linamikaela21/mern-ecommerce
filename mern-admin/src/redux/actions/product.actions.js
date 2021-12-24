import axios from "axios"
import { api } from '../../urlConfig'
import { productContants } from './constants'

export const addProduct = (form, token) => {
    console.log('form =>', form)
    return async dispatch => {
        dispatch({ type: productContants.ADD_NEW_PRODUCT_REQUEST })
        try {
            const res = await axios.post(`${api}/product/create`, form, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            const newProduct = res.data.product
            if (res.status === 201) {
                dispatch({ 
                    type: productContants.ADD_NEW_PRODUCT_SUCCESS,
                    payload: { products: newProduct }
                })
            } else {
                dispatch({
                    type: productContants.ADD_NEW_PRODUCT_FAIL,
                    payload: res.data.error 
                })
            }
        } catch (error) {
            console.log(error.response)
        }
    }
}