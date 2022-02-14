// just testing out importing under different name dont mind the name
import { createSlice as pizzaSlice } from "@reduxjs/toolkit";

// setting initial state of array
const initialState = {
  items: [],
};

export const todoSlice = pizzaSlice({

  name: "todos",

  initialState,

  reducers: {

    // returns the state of the array's items and the item the user added in the form
    addToDo: (state, action) => {
      return { items: [...state.items, action.payload] };
    },

    //  the item the user clicked on gets deleted
    removeOne: (state, action) => {
      let array = [...state.items];
      let index = action.payload;
      if (index !== -1) {
        array.splice(index, 1);
        return { items: array };
      }
    },

    //clears the items array 
    clearToDo: () => {
      return { items: [ ] };
    },
  },
});

export const { addToDo, removeOne, clearToDo } = todoSlice.actions;

export default todoSlice.reducer;
