<template>
  <form @submit.prevent="submitHandle">
    <div class="valign-wrapper">
      <div class="input-field col s12 field-flex">
        <input
           id="newTodo"
           type="text"
           v-model="newTodo"
           :class="{ invalid: ($v.newTodo.$dirty && !$v.newTodo.required) || ($v.newTodo.$dirty && !$v.newTodo.isUnique) }"
        />
        <label for="newTodo">What needs to be done?</label>
        <small
           class="helper-text invalid"
           v-if="$v.newTodo.$dirty && !$v.newTodo.required"
        >Field is required</small>
        <small
           class="helper-text invalid"
           v-if="$v.newTodo.$dirty && !$v.newTodo.isUnique"
        >This task name is already registered</small>
      </div>
      <div class="center-align">
        <button class="btn">Add Item</button>
      </div>
    </div>
  </form>
</template>

<script>
  import {required} from 'vuelidate/lib/validators'

  export default {
    name: 'addTodo',
    props: ['todos'],
    data: () => ({
      newTodo: ''
    }),
    validations: {
      newTodo: {
        required,
        isUnique(value) {
          if (value === '') return true
          return !this.todos.some(t => t.title === value)
        }
      }
    },
    methods: {
      submitHandle() {
        if (this.$v.$invalid) {
          this.$v.$touch()
          return
        }

        this.$store.dispatch('addNewTodo', {
          id: Math.random(),
          title: this.newTodo,
          isActive: true,
          priority: false
        })

        this.newTodo = ''
        this.$v.$reset()
      }
    }
  }
</script>

<style>
  .field-flex {
    flex: 1;
  }

  .input-field {
    margin-right: 10px;
  }

  .input-field .helper-text.invalid {
    color: #f44336;
    position: absolute;
  }
</style>