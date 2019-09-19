<template>
  <ul class="collection">
    <transition-group name="slide-fade">
      <li
         class="collection-item"
         v-for="(todo, index) of todos"
         :key="todo.id"
         @click="doneTodo(todo.id)"
      >
        <span class="todo-title" :class="{ completed: !todo.isActive, priority: todo.priority }">{{ todo.title }}</span>
        <diV class="btn-container">
          <button class="btn red waves-effect" @click.stop="removeTodo(index)">
            <i class="material-icons">delete</i>
          </button>
          <button class="btn waves-effect" @click.stop="priorityTodo(todo.id)">
            <i class="material-icons">priority_high</i>
          </button>
        </diV>
      </li>
    </transition-group>
  </ul>
</template>

<script>
  export default {
    props: ['todos'],
    methods: {
      removeTodo(index) {
        console.log('remove', index)
        this.$store.dispatch('removeTodo', index)
      },
      doneTodo(id) {
        this.$store.dispatch('doneTodo', id)
      },
      priorityTodo(id) {
        this.$store.dispatch('priorityTodo', id)
      }
    }
  }
</script>

<style scoped>
  .collection-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
  }

  .todo-title {
    transition: font-weight 0.25s;
  }

  .collection-item:hover {
    background-color: lightgray;
  }

  .btn-container > button:last-child {
    margin-left: 5px;
  }

  .priority {
    font-weight: 700;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }

  @keyframes strike {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  .completed {
    position: relative;
  }

  .completed:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: black;
    animation-name: strike;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
</style>