import axios from '@/axios'
import store from '@/store'

// Token Refresh
let isAlreadyFetchingAccessToken = false
let subscribers = []

function onAccessTokenFetched (access_token) {
  subscribers = subscribers.filter(callback => callback(access_token))
}

function addSubscriber (callback) {
  subscribers.push(callback)
}

export default {
  init () {
    axios.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      // const { config, response: { status } } = error
      const { config, response } = error
      const originalRequest = config

      // if (status === 401) {
      if (response && response.status === 401) {
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true
          store.dispatch('auth/fetchAccessToken')
            .then((access_token) => {
              isAlreadyFetchingAccessToken = false
              onAccessTokenFetched(access_token)
            })
        }

        const retryOriginalRequest = new Promise((resolve) => {
          addSubscriber(access_token => {
            originalRequest.headers.Authorization = `Bearer ${access_token}`
            resolve(axios(originalRequest))
          })
        })
        return retryOriginalRequest
      }
      return Promise.reject(error)
    })
  },
  me() {
    return axios.post('/api/auth/me')
  },
  login (email, pwd) {
    console.log('LOGIN')
    return axios.post('/api/auth/login', {
      email,
      password: pwd
    })
  },
  logout() {
    console.log('LOGOUT')
    return axios.post('/api/auth/logout')
  },
  registerUser (firstName, lastName, gender, email, password) {
    console.log('REGISTER')
    return axios.post('/api/auth/register', {
      first_name: firstName,
      last_name: lastName,
      gender,
      email,
      password
    })
  },
  refreshToken () {
    return axios.post('/api/auth/refresh-token', {accessToken: localStorage.getItem('accessToKen')})
  }
}
