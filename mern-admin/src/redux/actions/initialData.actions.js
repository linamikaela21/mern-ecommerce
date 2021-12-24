import { api } from '../../urlConfig'
import { categoriesContants, productContants } from "./constants"
import axiosInstance from "../../helpers/axios"

export const getInitialData = () => {
    return async dispatch => {
        const res = await axiosInstance.post(`${api}/admin/initialdata`)
        if(res.status === 200) {
            const { categories, products } = res.data
            dispatch({
                type: categoriesContants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories }
            })
            dispatch({
                type: productContants.GET_ALL_PRODUCTS_SUCCESS,
                payload: { products }
            })
        }
    }
}