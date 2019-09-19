import Vue from 'vue'
import Vuex from 'vuex'
import todo from './todo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true
  },
  modules: {
    todo
  },
  mutations: {
    loaded(state, load) {
      state.loading = load
    }
  },
  actions: {
    loaded({commit}, time) {
      setTimeout(() => {
        commit('loaded', false)
      }, time)
    }
  },
  getters: {
    loading(state) {
      return state.loading
    }
  }
})