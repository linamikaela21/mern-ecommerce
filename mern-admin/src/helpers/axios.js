import axios from 'axios'
import { api } from '../urlConfig'

const token = window.localStorage.getItem('token')

const axiosInstance = axios.create({
    apiBase: api,
    headers: {
        'Authorizarion': token ? `Bearer ${token}` : ''
    }
})

export default axiosInstance