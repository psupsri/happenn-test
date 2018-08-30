const state = {
  tasks: []
}

const mutations = {
  SAVETASK (state, v) {
    state.tasks.push(v)
  },
  COMPLETE (state, v) {
    let status = 'active'
    if (state.tasks[v].status === 'active') {
      status = 'complete'
    }
    state.tasks[v].status = status
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks[v].status = status
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },
  DELETE (state, v) {
    state.tasks.splice(v, 1)
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    tasks.splice(v, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
}

const actions = {
  savetask ({ commit }, payload) {
    commit('SAVETASK', payload)
  },
  complete ({ commit }, payload) {
    commit('COMPLETE', payload)
  },
  delete ({ commit }, payload) {
    commit('DELETE', payload)
  }
}

const getters = {
  getTask: state => id => state.tasks[id]
}

export default {
  state,
  getters,
  mutations,
  actions
}
