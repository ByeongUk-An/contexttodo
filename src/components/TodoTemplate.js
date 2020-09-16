import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

  margin: 0 auto;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    margin: 0;
    border-radius: 0;
    height: 100vh;
    box-shadow: none;
    overflow-x: none;
  }
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
