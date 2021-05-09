import React, { useState } from "react";
var uniqid = require("uniqid");

function Todo({
  todo,
  toggleComplete,
  removeTodo,
  edit,
  addTodo,
  handleEditChange,
  editChange1,
}) {
  const [todos, setTodos] = useState([]);

  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  function handleEdit() {
    edit(todo.id);
  }

  function editChange(e) {
    editChange1(e, todo.id);
  }

  function submitEditChange(e) {
    //"none", completed: false });
    //reset task input
    //all we need to do is concat a splice onto the todos
    /*   if (todo.task.trim()) {
      addTodo({ ...todos, task: e.target.value, id: uniqid() });
      //reset task input
      setTodo({ ...todos, task: "" });
    } */
    //get index instead
    //first get the index of the current todo
    //then add it then set it
    //then remove by its index number
    //on addtodo do todos.splide index
    //MUST return something

    //setTodos([e.target.value, ...todos]);

    handleEditChange(todo.id, e);
    //setTodos({ ...todo, task: "" });

    //addTodo({ ...todo, display: "none" });

    //make the display of input go away

    console.log(`Todo: ${todo.task}`);
  }

  return (
    <div style={{ display: "flex" }}>
      <input
        type='checkbox'
        defaultChecked={todo.completed}
        onClick={handleCheckboxClick}
      />
      <li
        style={{
          color: "black",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <input
        /* REALLY IMPORTANT, adding that e as the parameter bound it to App */
        onChange={(e) => editChange(e)}
        style={{ display: todo.display }}
      />
      <button onClick={(e) => submitEditChange(e)}>make edit</button>
      <button onClick={handleRemoveClick}>X</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
}

export default Todo;
