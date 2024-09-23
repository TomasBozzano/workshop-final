import axios from "axios"

const BASE_URL = import.meta.env.VITE_BASE_URL

export const getUser = async()=>{
    try {
        const response = await axios.get(BASE_URL);
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getUserById = async(id)=>{
    try {
        const response = await axios.get(`${BASE_URL}/users/${id}`);
        response.data
    } catch (error) {
        console.log(error)
    }
}

export const getSearchUser = async(search)=>{
    try {
        const response = await axios.get(`${BASE_URL}/users/search?q=${search}'`)
        response.data
    } catch (error) {
        console.log(error)
    }
}