import React from "react";
import Globalstyles from "./styles/Globalstyles";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import ContextPro from "./contexts/Context";

function App() {
  return (
    <ContextPro>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
      <Globalstyles />
    </ContextPro>
  );
}

export default App;
