import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const Context = createContext();

function ContextPro(props) {
  const [todos, setTodos] = useState([
    { text: "스케줄을", id: 1 },
    { text: "입력해", id: 2 },
    { text: "주시면", id: 3 },
    { text: "감사하겠습니다.", id: 4 },
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
