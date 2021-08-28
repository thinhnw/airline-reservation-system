// axios
import axios from 'axios'
import router from './router.js'

let headers = {
    'cache-control': 'no-cache'
};
let accessToken = localStorage.getItem('accessToken');

if (accessToken && accessToken !== '') {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
};
const instance = axios.create({
    baseURL: '',
    headers: headers
})

instance.interceptors.response.use((response) => {
    if(response.status === 401) {
          //add your code
          alert("You are not authorized")
    }
    return response;
}, (error) => {
    if (error.response && error.response.data) {
          //add your code
          if (error.response.data.message?.toLowerCase().includes('token')) {
              router.push({ name: 'login' })
          }
          return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message)
})

export default instance