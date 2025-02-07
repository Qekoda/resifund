import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import usersStore from './modules/users'

export default new Vuex.Store({
  modules: {
    users: { namespaced: true, ...usersStore},
  }
})
