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

  .stodo {
    font-size: 24px;
    color: blue;
  }
`;

function Todolist() {
  const { todos } = useContext(Context);
  return (
    <TodoListBlock>
      {todos.length ? (
        <ul>
          {todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.id} />;
          })}
        </ul>
      ) : (
        <div className="stodo">스케줄을 작성해주세요</div>
      )}
      {/* <TodoItem text="기능 구현하기" done={false}></TodoItem> */}
    </TodoListBlock>
  );
}

export default Todolist;
