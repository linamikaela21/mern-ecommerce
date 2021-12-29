import axios from "axios"
import { api } from '../../urlConfig'
import { categoriesContants } from './constants'

const token = window.localStorage.getItem('token')

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

export const addCategory = (form, token) => {
    return async dispatch => {
        dispatch({ type: categoriesContants.ADD_NEW_CATEGORY_REQUEST })
        try {
            const res = await axios.post(`${api}/category/create`, form, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            const newCategory = res.data.category
            if (res.status === 201) {
                dispatch({
                    type: categoriesContants.ADD_NEW_CATEGORY_SUCCESS,
                    payload: { categories: newCategory }
                });
            } else {
                dispatch({
                    type: categoriesContants.ADD_NEW_CATEGORY_FAIL,
                    payload: res.data.error
                });
            }
        } catch (error) {
            console.error(error)
        }
    }
}

export const updateCategories = (form) => {
    return async dispatch => {
        try {
            const res = await axios.post(`${api}/category/update`, form, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            if (res.status === 201) return true
        } catch (error) {
            console.error(error)
        }
    }
}

export const deleteCategoriesAction = (ids) => {
    return async dispatch => {
        try {
            const res = await axios.post(`${api}/category/delete`, {
                payload: ids
            }, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            if (res.status === 200) return true
        } catch (error) {
            console.error(error)
        }
    }
}