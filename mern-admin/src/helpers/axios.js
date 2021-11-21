import axios from 'axios'
import { api } from '../urlConfig'

const axiosInstance = axios.create({
    apiBase: api,
    // headers: {
    //     'Authorizarion': ''
    // }
})

export default axiosInstance