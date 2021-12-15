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

export const addCategory = (payload) => {
    return async dispatch => {
        dispatch({ type: categoriesContants.ADD_NEW_CATEGORY_REQUEST })
        try {
            const res = await axios.post(api + '/category/create', payload)
            console.log('action =>', res);
            if (res.status === 201) {
                dispatch({
                    type: categoriesContants.ADD_NEW_CATEGORY_SUCCESS,
                    payload: { categories: res.data }
                });
            } else {
                dispatch({
                    type: categoriesContants.ADD_NEW_CATEGORY_FAIL,
                    payload: res.data.error
                });
            }
        } catch (error) {   
            console.log(error.response)
        }

    }
}