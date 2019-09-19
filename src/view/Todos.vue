<template>
  <div class="row">
    <div class="col s12">
      <h2>Todo List</h2>
      <TodosFilter :filter="filter" @updateFilter="updateFilter" :search="search" @changeSearch="changeSearch" />
      <TodoList :todos="todosFilter"/>
      <TodoAddNew :todos="todos"/>
    </div>
  </div>
</template>

<script>
  import TodosFilter from '@/components/TodosFilter'
  import TodoAddNew from '@/components/TodoAddNew'
  import TodoList from '@/components/TodoList'
  import {mapGetters} from 'vuex'

  export default {
    name: 'app',
    data: () => ({
      filter: 'all',
      search: ''
    }),
    methods: {
      updateFilter(value) {
        this.filter = value
      },
      changeSearch(value) {
        this.$store.dispatch('changeSearch', value)
      }
    },
    computed: {
      ...mapGetters(['todosActive', 'todosDone', 'todosPriority', 'todos']),
      todosFilter() {
        switch (this.filter) {
          case 'active':
            return this.todosActive
          case 'done':
            return this.todosDone
          case 'priority':
            return this.todosPriority
          default:
            return this.todos
        }
      }
    },
    components: {
      TodosFilter,
      TodoAddNew,
      TodoList
    }
  }
</script>