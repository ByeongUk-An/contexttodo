import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete, MdDoneAll } from "react-icons/md";
import { Context } from "../contexts/Context";

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
const Remove = styled.div`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  ${(props) =>
    props.done &&
    css`
      opacity: 1;
    `}
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

function TodoItem({ todo }) {
  const { onRemove } = useContext(Context);
  const [done, setDone] = useState(false);

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={() => setDone(!done)}>
        {done && <MdDoneAll />}
      </CheckCircle>
      <Text done={done}>{todo.text}</Text>
      <Remove onClick={() => onRemove(todo.id)} done={done}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
