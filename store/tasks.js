export const state = () => ({
  tasks: [],
  endpoint: '/tasks/'
})

export const mutations = {
  setTasks (state, tasks) {
    state.tasks = tasks
  },

  addTask (state, task) {
    state.tasks.push(task)
  },

  updateTask (state, task) {
    const taskId = task.id
    state.tasks.splice(state.tasks.findIndex(task => task.id === taskId), 1, task)
  },

  removeTask (state, task) {
    const taskId = task.id
    state.tasks.splice(state.tasks.findIndex(task => task.id === taskId), 1)
  },

  clearTasks (state) {
    state.tasks = []
  }
}

export const getters = {
  filteredTasks: (_, getters) => status => {
    if (status === 'completed') {
      return getters.completedTasks
    } else if (status === 'active') {
      return getters.activeTasks
    }

    return getters.allTasks
  },

  allTasks (state) {
    return state.tasks
  },

  activeTasks (state) {
    return state.tasks.filter(task => task.is_completed === false)
  },

  completedTasks (state) {
    return state.tasks.filter(task => task.is_completed === true)
  },

  timeToChill: (state, getters) => status => {
    return !state.tasks.length ||
            (status === 'active' && !getters.activeTasks.length) ||
            (status === 'completed' && !getters.completedTasks.length)
  }
}

export const actions = {
  fetchTasks ({ commit, state }) {
    return this.$axios.$get(state.endpoint)
      .then(({ data }) => {
        commit('setTasks', data)
        return data
      })
      .catch(error => {
        return Promise.reject(error)
      })
  },

  addTask ({ commit, state }, params) {
    return this.$axios.$post(state.endpoint, params)
      .then(({ data }) => {
        commit('addTask', data)
        return data
      })
      .catch(error => {
        return Promise.reject(error)
      })
  },

  updateTask ({ commit, state }, { task, params }) {
    return this.$axios.$patch(state.endpoint + task.id, params)
      .then(({ data }) => {
        commit('updateTask', data)
        return data
      })
      .catch(error => {
        return Promise.reject(error)
      })
  },

  removeTask ({ commit, state }, task) {
    return this.$axios.$delete(state.endpoint + task.id)
      .then(response => {
        commit('removeTask', task)
        return response
      })
      .catch(error => {
        return Promise.reject(error)
      })
  },

  deleteTasks ({ commit, state, getters }) {
    return this.$axios.$delete(state.endpoint)
      .then(response => {
        getters.completedTasks.forEach(task => commit('removeTask', task))
        return response
      })
      .catch(error => {
        return Promise.reject(error)
      })
  }
}
