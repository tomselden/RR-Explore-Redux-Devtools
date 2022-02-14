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

    // theortically should just clear the items array back to it's initial state on line 6
    // (error: it does clear it once and then app errors out with this message => items are not iterable)
    clearToDo: () => {
      return { items: { initialState } };
    },
  },
});

export const { addToDo, removeOne, clearToDo } = todoSlice.actions;

export default todoSlice.reducer;
