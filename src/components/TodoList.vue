<template>
  <div>
    <h4>Todo List</h4>
    <div class="todo-list-container">
      <div class="todo" v-for="todo in todoList" v-bind:key="todo.id">
        <h5>{{todo.title}}</h5>
        <p>{{todo.description}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TodoList",
  props: {
    todoList: Array
  },
  created() {
    console.log(this.$props.todoList);
  }
};
</script>

<style>
.todo {
  text-align: left;
}
h4,
h5,
p {
  margin: 0;
  padding: 0;
}
</style>