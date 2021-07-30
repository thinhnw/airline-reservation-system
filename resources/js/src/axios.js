// axios
import axios from 'axios'

const baseURL = ''

const token = localStorage.getItem('accessToken')

// prepend all requests with token
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default axios.create({
  baseURL
  // You can add your headers here
})
