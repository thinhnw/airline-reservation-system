import axios from '@/axios'
import Vue from 'vue'

export default {
  SET_BEARER (state, accessToken) {
    localStorage.setItem('accessToken', accessToken)
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  },
  UPDATE_USER_INFO(state, userInfo) {
    console.log('UPDATE', userInfo)
    localStorage.setItem('userInfo', JSON.stringify(userInfo || {}))
    // state.userInfo = userInfo
    Object.keys(userInfo).forEach(key => {
      Vue.set(state.userInfo, key, userInfo[key])
    })
  },
  CLEAR_USER_INFO(state) {
    state.userInfo = {}
    localStorage.removeItem('accessToken')
    localStorage.removeItem('userInfo')
  }
}
