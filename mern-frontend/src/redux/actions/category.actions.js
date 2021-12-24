import axios from "axios"
import { api } from '../../urlConfig'
import { categoriesContants } from './constants'

export const getAllCategories = () => {
    return async dispatch => {
        dispatch({ type: categoriesContants.GET_ALL_CATEGORIES_REQUEST })
        const res = await axios.get(`${api}/category/getCategories`)
        if (res.status === 200) {
            const { categoriesList } = res.data
            dispatch({ 
                type: categoriesContants.GET_ALL_CATEGORIES_SUCCESS,
                payload: { categories: categoriesList }
            })
        } else {
            dispatch({
                type: categoriesContants.GET_ALL_CATEGORIES_FAIL,
                payload: { error: res.data.error }
            })
        }
    }
}