import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { Context } from "../contexts/Context";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .task-wrap {
    display: flex;
    justify-content: space-between;
  }
  .task-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
  .clearbtn {
    border: none;
    outline: none;
    background: #20c997;
    color: white;
    width: 105px;
    height: 40px;
    border-radius: 14px;
    margin-top: 25px;
    cursor: pointer;
    &:hover {
      background: #39daa9;
    }
  }
`;

function TodoHead() {
  const { clear, todos } = useContext(Context);
  const day = new Date();
  let year = day.getFullYear();
  let month = day.getMonth();
  let date = day.getDate();
  let dday = day.getDay();
  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  return (
    <TodoHeadBlock>
      <h1>{`${year}년 ${month + 1}월 ${date}일`}</h1>
      <div className="day">{`${week[dday]}`}</div>
      <div className="task-wrap">
        <div className="task-left">{`할 일 ${todos.length}개 남음`}</div>
        <button className="clearbtn" onClick={clear}>
          초기화
        </button>
      </div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
