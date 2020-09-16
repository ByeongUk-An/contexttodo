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
    color: #4c6ef5;
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
    background: #be4bdb;
    color: white;
    width: 105px;
    height: 40px;
    border-radius: 14px;
    margin-top: 25px;
    cursor: pointer;
    &:hover {
      background: #da77f2;
    }
  }
  @media ${(props) => props.theme.mobile} {
    padding-top: 10px;
    h1 {
      font-size: 20px;
      display: inline-block;
    }
    .day {
      display: inline-block;
      margin-left: 10px;
    }
    .task-left {
      margin: 10px 0 0 10px;
      color: purple;
    }
    .clearbtn {
      margin: 10px 0 0 0;
      padding: 0;
      border-radius: 0;
      height: 30px;
      background: #f783ac;
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
        <div className="task-left">{`TODO ${todos.length} NUMBER`}</div>
        <button className="clearbtn" onClick={clear}>
          Clear
        </button>
      </div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
