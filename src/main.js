import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      todoList: [
        {
          id: 1,
          title: 'Get milk from store',
          description: 'cow milk',
        },
        {
          id: 3,
          title: 'Recharge mobile store',
          description: 'Vodafone',
        },
        {
          id: 3,
          title: 'Get visa appointment',
          description: 'book the appointment via test.book.com',
        },
      ],
    };
  },
  mutations: {
    addTodo(state, todo) {
      console.log(todo);
      console.log([
        ...state.todoList,
        {
          id: state.todoList.length,
          title: todo.todoTitle,
          description: todo.todoDescription,
        },
      ]);
      state.todoList = [
        ...state.todoList,
        {
          id: state.todoList.length,
          title: todo.todoTitle,
          description: todo.todoDescription,
        },
      ];
    },
    removeTodo(state, id) {
      state.todoList = state.todoList.filter(todo => todo.id !== id);
    },
  },
});

createApp(App)
  .use(store)
  .mount('#app');
