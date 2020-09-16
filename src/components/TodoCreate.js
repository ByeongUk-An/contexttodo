import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useContext } from "react";
import ContextPro, { Context } from "../contexts/Context";

const CircleButton = styled.button`
  background: #7950f2;
  &:hover {
    background: #cc5de8;
  }
  &:active {
    background: #eebefa;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);

  font-size: 60px;
  color: white;
  border-radius: 50%;

  border: none;
  outline: none;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #f783ac;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
  @media ${(props) => props.theme.mobile} {
    padding: 32px;
  }
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
  }
`;

function TodoCreate() {
  const { addTodo } = useContext(Context);
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);
  const [text, setText] = useState("");

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 480) {
      setOpen(true);
    }
  }, []);

  const onChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setText(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    console.log(text);
    setText("");
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              placeholder="할 일을 입력 후, Enter를 누르세요"
              autoFocus
              onChange={onChange}
              value={text}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton open={open} onClick={onToggle}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
