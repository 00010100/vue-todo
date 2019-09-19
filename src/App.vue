<template>
  <Loader class="loader" v-if="loading"/>
  <Todos v-else/>
</template>

<script>
  import Todos from '@/view/Todos'
  import {mapGetters} from 'vuex'

  export default {
    name: 'todos_app',
    components: {
      Todos
    },
    async mounted() {
      await this.$store.dispatch('loaded', 1000)
    },
    computed: {
      ...mapGetters(['loading'])
    }
  }
</script>

<style>
  @import "~materialize-css/dist/css/materialize.min.css";
</style>
