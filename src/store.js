import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/ToDoSlice";
import counterReducer from "./features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
});
