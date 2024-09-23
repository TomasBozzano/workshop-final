import axios from "axios"
const BASE_URL = import.meta.env.VITE_BASE_URL

export const login = async(dato) => {
    console.log(dato)
    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, dato)
        return response.data

    } catch (error) {
        console.log(error)
    }
}