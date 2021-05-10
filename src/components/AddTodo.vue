<template>
  <div>
    <h3>{{ title }}</h3>
    <div>
      <input v-model="todoTitle" ref="title" name="title" />
    </div>
    <div>
      <input v-model="todoDescription" ref="desc" name="desc" />
    </div>
    <div>
      <button v-on:click="addTodo({ todoTitle, todoDescription })">Add</button>
    </div>
    <TodoList :todoList="todoList" />
  </div>
</template>

<script>
import TodoList from './TodoList';
// import data from '../../data';
import { mapState } from 'vuex';

export default {
  name: 'AddTodo',
  components: {
    TodoList,
  },
  props: {
    title: String,
  },
  data() {
    return {
      todoTitle: null,
      todoDescription: null,
      //todoList: data,
    };
  },
  methods: {
    addTodo: function(todo) {
      if (!todo.title && !todo.description) {
        // this.todoList = [
        //   ...this.todoList,
        //   {
        //     id: this.todoList.length,
        //     title: todo.todoTitle,
        //     description: todo.todoDescription
        //   }
        // ];
        this.$store.commit('addTodo', todo);
        this.todoTitle = '';
        this.todoDescription = '';
        this.$refs.title.focus();
      }
    },
  },
  computed: mapState({
    todoList: state => state.todoList,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  padding: 10px;
  margin: 10px;
}
button {
  background: yellow;
  color: black;
  border: 1px solid orange;
  padding: 10px;
}
</style>
