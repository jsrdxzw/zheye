import { createStore } from 'vuex'
import axios from 'axios'
import { userLogin, getCurrentUser } from '@/api/userApi'

export default createStore({
  state: {
    token: localStorage.getItem('token') || '',
    user: { isLogin: false }
  },
  mutations: {
    login (state, token) {
      state.token = token
      localStorage.setItem('token', token)
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    fetchCurrentUser (state, data) {
      state.user = { isLogin: true, ...data }
    },
    fetchColumn (state, data) {
      console.log(data)
    }
  },
  actions: {
    fetchCurrentUser ({ commit }) {
      const user = getCurrentUser()
      commit('fetchCurrentUser', user)
    },
    login ({ commit }, payload) {
      const { token } = userLogin(payload)
      commit('login', token)
    },
    loginAndFetch ({ dispatch }, loginData) {
      return dispatch('login', loginData).then(() => {
        return dispatch('fetchCurrentUser')
      })
    }
  },
  modules: {}
})
