import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useContext } from "react";
import { Context } from "../contexts/Context";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function Todolist() {
  const { todos } = useContext(Context);
  return (
    <TodoListBlock>
      <ul>
        {todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} done={todo.done} />;
        })}
      </ul>
      {/* <TodoItem text="기능 구현하기" done={false}></TodoItem> */}
    </TodoListBlock>
  );
}

export default Todolist;
