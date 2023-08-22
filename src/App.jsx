import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <TodoList todos={todos} setTodos={setTodos} />
      </header>
    </div>
  );
};

export default App;
