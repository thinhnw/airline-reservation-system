import jwt from '@/http/requests/auth/jwt/index.js'

import router from '@/router'

export default {
 
  updateUsername ({ commit }, payload) {
    payload.user.updateProfile({
      displayName: payload.displayName
    }).then(() => {

      // If username update is success
      // update in localstorage
      const newUserData = Object.assign({}, payload.user.providerData[0])
      newUserData.displayName = payload.displayName
      commit('UPDATE_USER_INFO', newUserData, {root: true})

      // If reload is required to get fresh data after update
      // Reload current page
      if (payload.isReloadRequired) {
        router.push(router.currentRoute.query.to || '/')
      }
    }).catch((err) => {
      payload.notify({
        time: 8800,
        title: 'Error',
        text: err.message,
        iconPack: 'feather',
        icon: 'icon-alert-circle',
        color: 'danger'
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
            router.push(router.currentRoute.query.to || '/')

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
          commit('CLEAR_USER_INFO')
          resolve(response)
        })
        .catch(error => { reject(error) })
    })
  }
}