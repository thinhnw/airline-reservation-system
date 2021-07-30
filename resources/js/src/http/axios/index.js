import axios from '../../axios.js'
const token = localStorage.getItem('accessToken')

// prepend all requests with token
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default axios
