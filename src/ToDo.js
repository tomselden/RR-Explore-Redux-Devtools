import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, removeOne, clearToDo } from "./features/ToDoSlice";

const ToDo = () => {
  //  setting up variable items to the feature todo to use the reducers
  const items = useSelector((state) => state.todos.items);

  // assigning dispatch variable to useDispactch hook, which will allow us to use the reducers
  // we have to assign use dispatch here because we can't call it inside callback functions
  const dispatch = useDispatch();

  // assigning an empty array to renderedItems
  let renderedItems = [];

  //   setting the use state for the user's input
  const [input, setInput] = useState("");

  // checks if the array length is more then 0, then showing rendered items and allowing use of the removeOne reducer
  if (items.length > 0) {
    renderedItems = items.map((item, index) => (
      <li key={index} onClick={() => dispatch(removeOne(index))}>
        {item}
      </li>
    ));
  }
  //  setting up submitForm function, which adds the item to the todo list
  const submitForm = (e) => {
    // prevent stops the form submission from during it's default action and dispatches the addToDo reducer instead
    e.preventDefault();
    dispatch(addToDo(input));
  };

  return (
    <div>
      {/* onSubmit it is passing the event action to submitForm function*/}
      <form onSubmit={(e) => submitForm(e)}>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <ul>{renderedItems}</ul>
      <button onClick={() => dispatch(clearToDo())}>Clear</button>
    </div>
  );
};

export default ToDo;
