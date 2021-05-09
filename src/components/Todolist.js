import React from "react";
import Todo from "./Todo";

//all we are doing in this component is spreading out each li from todo.js

function Todolist({
  todos,
  removeTodo,
  toggleComplete,
  edit,
  handleEditChange,
  addTodo,
  editChange1,
}) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          addTodo={addTodo}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          edit={edit}
          handleEditChange={handleEditChange}
          editChange1={editChange1}
        />
      ))}
    </ul>
  );
}

export default Todolist;
