import axios from "axios"

const BASE = 'http://127.0.0.1:8000'

export const REGISTER_USER = async(data) => {
    const response = await axios.post(`${BASE}/user/register`, data)
    return response
}

export const LOGIN_USER = async(data) => {
    const response = await axios.post(`${BASE}/user/login`, data)
    return response
}