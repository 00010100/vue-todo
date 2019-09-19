<template>
  <div class="filter valign-wrapper">
    <div class="input-field col s12 field-flex">
      <input class="filter-input" type="text" id="search" @input="changeSearch"/>
      <label for="search">Search...</label>
    </div>
    <div>
      <button
         class="btn btn-flat waves-effect"
         :class="{ active: filter === 'all' }"
         @click="updateFilter('all')"
      >
        All
      </button>
      <button
         class="btn btn-flat waves-effect"
         :class="{ active: filter === 'priority' }"
         @click="updateFilter('priority')"
      >
        Priority
      </button>
      <button
         class="btn btn-flat waves-effect"
         :class="{ active: filter === 'active' }"
         @click="updateFilter('active')"
      >Active
      </button>
      <button
         class="btn btn-flat waves-effect"
         :class="{ active: filter === 'done' }"
         @click="updateFilter('done')"
      >
        Done
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['filter', 'search'],
    methods: {
      updateFilter(value) {
        this.$emit('updateFilter', value)
      },
      changeSearch(event) {
        this.$emit('changeSearch', event.target.value)
      }
    }
  }
</script>

<style scoped>
  .field-flex {
    flex: 1;
  }

  .btn {
    border: 1px solid black;
    margin-right: -1px;
  }

  .btn:hover {
    color: #fff;
  }

  .btn.active {
    background-color: #26a69a;
    color: #fff;
  }

  .filter-input {
    flex: 1;
    margin-right: 10px;
  }
</style>