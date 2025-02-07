import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios'
import Toast from 'vue-toastification'

import './assets/stylesheets/_application.sass'
import 'vue-toastification/dist/index.css'

Vue.use(Toast)

Vue.config.productionTip = false
window.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
