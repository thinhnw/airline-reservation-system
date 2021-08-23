import Vue from 'vue'
import App from './App.vue'

// axios
import axios from './axios.js'
Vue.prototype.$http = axios

// API Calls
// import './http/requests'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';


// Vue Router
import router from './router'
// Vuex
import store from './store'

import '../../sass/app.scss'

Vue.config.productionTip = false

//SweetAlert2

import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
