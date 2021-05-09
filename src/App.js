import "./App.css";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Todoform from "./components/Todoform";
import Todolist from "./components/Todolist";
const LOCAL_STORAGE_KEY = "react-todo-list-todos";
var uniqid = require("uniqid");

function App() {
  const [todos, setTodos] = useState([]);

  //retrieve it on page load
  //notice the empty array dependency
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  //everytime todos array changes, this gets run
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  //YOU HAVE TO RETURN SOMETHING FOR MAP
  //THIS THREW A HUGE ERROR BEFORE
  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        console.log(todos);
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log(todos);
  }

  function edit(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          console.log(todo);
          return {
            ...todo,
            task: "",
            display: "block",
            id: uniqid(),
          };
        }
        return todo;
      })
    );
  }

  function editChange1(e, id) {
    //only return that one thing set back sam
    //because its an LI element thats getting mapped over
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          console.log(todo);
          return {
            ...todo,
            task: e.target.value,
          };
        }
        return todo;
      })
    );
    console.log(e.target.value);
  }

  function handleEditChange(id, e) {
    //setTodos([todo, ...todos]);
    //setTodos({ ...todos, task: "" });

    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          console.log(todo);
          return {
            ...todo,
            display: "none",
          };
        }
        return todo;
      })
    );

    //setTodos({ ...todo, task: "" });
  }

  return (
    <div className='App'>
      <header></header>
      <p>React Todo</p>
      {/* addTodo is like a prop and you're passing in the function like an argument */}
      <Todoform addTodo={addTodo} />
      <Todolist
        addTodo={addTodo}
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
        edit={edit}
        handleEditChange={handleEditChange}
        editChange1={editChange1}
      />
    </div>
  );
}

export default App;
