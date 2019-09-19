export default {
  state: {
    todos: [
      {
        id: 1,
        title: 'Drink Coffee',
        isActive: false,
        priority: false
      },
      {
        id: 2,
        title: 'Make Awesome App',
        isActive: true,
        priority: true
      },
      {
        id: 3,
        title: 'Have a lunch',
        isActive: true,
        priority: false
      }
    ],
    search: ''
  },
  mutations: {
    addNewTodo(state, todo) {
      state.todos.push(todo)
    },
    removeTodo(state, index) {
      state.todos.splice(index, 1)
    },
    doneTodo(state, id) {
      state.todos = state.todos.map(t => t.id === id ? {...t, isActive: !t.isActive} : t)
    },
    changeSearch(state, search) {
      state.search = search
    },
    priorityTodo(state, id) {
      state.todos = state.todos.map(t => t.id === id ? {...t, priority: !t.priority} : t)
    }
  },
  actions: {
    addNewTodo({commit}, todo) {
      commit('addNewTodo', todo)
    },
    removeTodo({commit}, index) {
      commit('removeTodo', index)
    },
    doneTodo({commit}, id) {
      commit('doneTodo', id)
    },
    changeSearch({commit}, search) {
      commit('changeSearch', search)
    },
    priorityTodo({commit}, id) {
      commit('priorityTodo', id)
    }
  },
  getters: {
    todos(state) {
      return state.todos.filter(t => t.title.toLowerCase().match(state.search.toLowerCase()))
    },
    todosActive(state, getters) {
      return getters.todos.filter(t => t.isActive)
    },
    todosDone(state, getters) {
      return getters.todos.filter(t => !t.isActive)
    },
    todosPriority(state, getters) {
      return getters.todos.filter(t => t.priority)
    }
  }
}
