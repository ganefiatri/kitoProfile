import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXTAUTH_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios