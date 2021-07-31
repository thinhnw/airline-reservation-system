import jwt from '@/http/requests/auth/jwt/index.js'

import router from '@/router'

export default {
 
  me({ commit }) {
    return new Promise((resolve, reject) => {
      jwt.me()
        .then(res => {
          // Update user details
          commit('UPDATE_USER_INFO', res.data)
          resolve(res)
        })
        .catch(err => {
          commit('CLEAR_USER_INFO')
          reject(err)
        })
    })
  },


  // JWT
  loginJWT ({ commit }, payload) {

    return new Promise((resolve, reject) => {
      jwt.login(payload.userDetails.email, payload.userDetails.password)
        .then(response => {
          // If there's user data in response
          if (response.data.userInfo) {

            // Set accessToken
            // Set bearer token in axios
            commit('SET_BEARER', response.data.access_token)

            // Update user details
            commit('UPDATE_USER_INFO', response.data.userInfo)


            // Navigate User to homepage
            if (response.data.userInfo.user_type === 'customer')
              router.push(router.currentRoute.query.to || '/')
            else 
              router.push(router.currentRoute.query.to || '/admin/dashboard')

            resolve(response)
          } else {
            reject({message: 'Wrong Email or Password!!'})
          }

        })
        .catch(error => { reject(error) })
    })
  },
  registerUserJWT ({ commit }, payload) {

    const { firstName, lastName, gender, email, password } = payload.userDetails

    return new Promise((resolve, reject) => {

      console.log('HENLO')
      jwt.registerUser(firstName, lastName, gender, email, password)
        .then(response => {
          console.log('RESPONSE', response)

          commit('SET_BEARER', response.data.access_token)
          commit('UPDATE_USER_INFO', response.data.userInfo)

          // Redirect User
          router.push('/')

          resolve(response)
        })
        .catch(error => { reject(error) })
    })
  },
  fetchAccessToken () {
    return new Promise((resolve) => {
      jwt.refreshToken().then(response => { resolve(response) })
    })
  },

  logout({ commit }) {
    return new Promise((resolve, reject) => {
      jwt.logout()
        .then(response => {
          // Update data in localStorage
          router.push('/')
          commit('CLEAR_USER_INFO')
          resolve(response)
        })
        .catch(error => { reject(error) })
    })
  }
}