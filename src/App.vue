<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <AddTodo title="Add todo app"/>
</template>

<script>
import AddTodo from './components/AddTodo.vue'

export default {
  name: 'App',
  components: {
    AddTodo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
