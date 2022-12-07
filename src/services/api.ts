import axios from 'axios'

export const api = () => {
    const baseURL = process.env.REACT_APP_BASE_API_URL

    return axios.create({
        baseURL: 'https://fakestoreapi.com'
    })
}