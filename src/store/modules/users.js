import Vue from 'vue'

export default ({
  state: {
    users: [],
  },
  getters: {
  },
  mutations: {
    CLEAR_USERS(state) {
      Vue.set(state, 'users', [])
    },
    SET_USERS(state, users) {
      Vue.set(state, 'users', users)
    }
  },
  actions: {
    async getUsers({commit}, params) {
      try {
        const response = await axios.get('/users', {params})
        commit('SET_USERS', response.data)
      } catch (error) {
        throw error
      }
    },
    clearUsers({commit}) {
      commit('CLEAR_USERS')
    }
  },
})
