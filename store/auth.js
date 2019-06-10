import moment from 'moment'

const types = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
}

export const state = () => ({
  user: null,
  endpoint: '/users/',
  logged: !!window.localStorage.getItem('token')
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  },

  [types.LOGIN] (state, data) {
    state.logged = true

    window.localStorage.setItem('token', data.access_token)
    window.localStorage.setItem('userId', data.user_id)
    window.localStorage.setItem('expiresAt', moment().add(data.expires_in, 'seconds').format())
    this.$axios.setToken(data.access_token, 'Bearer')
  },

  [types.LOGOUT] (state) {
    state.logged = false
    state.user = null

    window.localStorage.removeItem('token')
    window.localStorage.removeItem('userId')
    window.localStorage.removeItem('expiresAt')

    this.$axios.setToken(false)
  }
}

export const getters = {
  isLogged: state => state.logged
}

export const actions = {
  async fetchUser ({ commit }) {
    await this.$axios.$get('/auth/me')
      .then(({ data }) => {
        commit('setUser', data.data)
        return data.data
      })
      .catch(error => {
        return Promise.reject(error)
      })
  },

  login ({ commit, dispatch }, data) {
    commit(types.LOGIN, data)

    dispatch('fetchUser')

    this.$router.push({ name: 'TaskList', params: { status: 'active' } })
  },

  logout ({ commit }) {
    commit(types.LOGOUT)
    commit('clearTasks')

    this.$router.push({ name: 'Login' })
  }
}
