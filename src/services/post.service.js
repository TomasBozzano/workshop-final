import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const getPost = async() =>{
    try {
        const response = await axios.get(`${BASE_URL}/posts`)
        response.data
    } catch (error) {
        console.log(error)
    }
}
export const getPostById = async(id)=>{
    try {
        const response = await axios.get(`${BASE_URL}/posts/${id}`);
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const getPostUserById = async(userId) =>{
    try {
        const response = await axios.get(`${BASE_URL}/posts/users/${userId}`);
        response.data
    } catch (error) {
        console.log(error)
    }
}