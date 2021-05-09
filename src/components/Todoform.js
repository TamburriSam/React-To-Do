import React, { useState } from "react";
var uniqid = require("uniqid");

function Todoform({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
    display: "none",
  });

  function handleTaskInputChange(e) {
    //pass new obj w old todo property spread on to it, then update the task property with the new value from the events target value
    //e.target.value contains new input text from user
    setTodo({
      ...todo,
      task: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    //if its not empty- trim removes whihitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uniqid() });
      //reset task input
      setTodo({ ...todo, task: "" });
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name='task'
        type='text'
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <button type='submit'>submit</button>
    </form>
  );
}

export default Todoform;
