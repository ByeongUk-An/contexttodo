import React from "react";
import Globalstyles from "./styles/Globalstyles";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

function App() {
  return (
    <>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
      <Globalstyles />
    </>
  );
}

export default App;
