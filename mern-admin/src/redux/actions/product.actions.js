import axios from "axios"
import { api } from '../../urlConfig'
import { productContants } from './constants'

// export const getAllProducts = () => {
//     return async dispatch => {
//         dispatch({ type: productContants.GET_ALL_PRODUCTS_REQUEST })
//         const res = await axios.get(`${api}/products/getProducts`)
//         if (res.status === 200) {
//             const { productsList } = res.data
//             dispatch({ 
//                 type: productContants.GET_ALL_PRODUCTS_SUCCESS,
//                 payload: { products: productsList }
//             })
//         } else {
//             dispatch({
//                 type: productContants.GET_ALL_PRODUCTS_FAIL,
//                 payload: { error: res.data.error }
//             })
//         }
//     }
// }

export const addProduct = (form) => {
    console.log('form =>', form)
    return async dispatch => {
        dispatch({ type: productContants.ADD_NEW_PRODUCT_REQUEST })
        try {

            //PASO POR USESELECTOR EL TOKEN EN USER.TOKEN Y LO ENVIO POR PARAMETROS
            // const res = await axios.post(`${api}/product/create`, form, {
            //     headers: {
            //         authorization: `Bearer ${token}`
            //     }
            // })
            const res = await axios.post(`${api}/product/create`, form)
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