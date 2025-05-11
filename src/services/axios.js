import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
  baseURL: 'https://api.uatsystems.dev',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [(data) => qs.stringify(data)],
  withCredentials: false, // Optional: true if you want to send cookies
})

export default instance
