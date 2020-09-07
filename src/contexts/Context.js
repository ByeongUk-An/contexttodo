import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const Context = createContext();

function ContextPro(props) {
  const [todos, setTodos] = useState([
    { text: "안녕하세요", id: 1, done: true },
    { text: "안녕", id: 2, done: true },
    { text: "헬로우", id: 3, done: true },
    { text: "바이", id: 4, done: true },
  ]);
  const [selecItem, setSelectItem] = useState(null);

  const addTodo = (text) => {
    setTodos([...todos, { text, id: uuid(), done: true }]);
  };
  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const clear = () => {
    setTodos([]);
  };
  //   const onDone = (done) => {
  //     setTodos(todos.map((todo) => (todo.done ? !todo.done : todo.done)));
  //   };

  const select = (id) => {
    const item = todos.find((todo) => todo.id === id);
    console.log(item);
    setSelectItem(item);
  };

  return (
    <Context.Provider value={{ addTodo, todos, select, onRemove, clear }}>
      {props.children}
    </Context.Provider>
  );
}

export default ContextPro;
