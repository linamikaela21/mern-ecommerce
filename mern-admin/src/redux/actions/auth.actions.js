import { authConstants } from './constants'
import axios from '../../helpers/axios'
import { api } from '../../urlConfig'

export const logIn = (user) => {

    console.log('user =>', user)

    return async (dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post(`${api}/admin/signin`, { ...user })

        if (res.status === 200) {
            const { token, user } = res.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: { token, user }
            })
        } else {
            if (res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FAIL,
                    payload: { error: res.data.error }
                })
            }
        }
    }
}

export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'))
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        } else {
            dispatch({
                type: authConstants.LOGIN_FAIL,
                payload: { error: 'Login Failed' }
            })
        }
    }
}

export const logOut = () => {
    return async dispatch => {
        dispatch({ type: authConstants.LOGOUT_REQUEST })
        const res = await axios.post(`${api}/admin/signout`)

        if (res.status === 200) {
            localStorage.clear()
            dispatch({
                type: authConstants.LOGOUT_SUCCESS
            })
        } else {
            dispatch({
                type: authConstants.LOGOUT_FAIL,
                payload: { error: res.data.error }
            })
        }
    }
}
