import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import moduleAuth from './auth/moduleAuth.js'
import moduleApp from './app/moduleApp.js'


export default new Vuex.Store({
  modules: {
    auth: moduleAuth,
    app: moduleApp,
  },
  strict: process.env.NODE_ENV !== 'production'
})
