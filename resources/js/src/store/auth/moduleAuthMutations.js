import axios from '@/axios'
import Vue from 'vue'

export default {
  SET_BEARER (state, accessToken) {
    state.isLogged = true
    localStorage.setItem('accessToken', accessToken)
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  },
  UPDATE_USER_INFO(state, userInfo) {
    console.log('UPDATE', userInfo)
    // localStorage.setItem('userInfo', JSON.stringify(userInfo || {}))
    state.isMeFetched = true
    Object.keys(userInfo).forEach(key => {
      Vue.set(state.userInfo, key, userInfo[key])
    })
  },
  CLEAR_USER_INFO(state) {
    state.userInfo = {}
    state.isLogged = false
    state.isMeFetched = false
    localStorage.removeItem('accessToken')
    // localStorage.removeItem('userInfo')
  },
  
}
