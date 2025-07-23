import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useTodoStore = create(devtools((set) => ({
  todos: [],

  addTodo: (item) => {
    set((state) => ({
      todos: [...state.todos, item],
    }));
  },

  removeTodo: (todoID) => {
    set((state) => ({
      todos: state.todos.filter((item) => item.id !== todoID),
    }));
  },
})));

export default useTodoStore;
