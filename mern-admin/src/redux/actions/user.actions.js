import axios from '../../helpers/axios'
import { api } from '../../urlConfig'
import { userContants } from './constants'

export const signUp = (user) => {

    console.log('user =>', user)

    return async (dispatch) => {

        dispatch({ type: userContants.USER_REGISTER_REQUEST });
        const res = await axios.post(`${api}/admin/signup`, { ...user })

        if (res.status === 201) {
            const { message } = res.data
            dispatch({
                type: userContants.USER_REGISTER_SUCCESS,
                payload: { message }
            })
        } else {
            if (res.status === 400) {
                dispatch({
                    type: userContants.USER_REGISTER_FAIL,
                    payload: { error: res.data.error }
                })
            }
        }
    }
}