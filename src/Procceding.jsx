import React, { useState } from 'react';



function Proceeding(todos, complete, setToDos, setComplete) {

  const removeToDo = (id) => {
    console.log("삭제 버튼 작동 여부 확인");
    setToDos(todos.filter((el) => el.id !== id));
  };

  const completeToDo = (id) => {
    console.log("완료 버튼 작동 여부 확인");
    // setComplete([...complete, ...todos.filter((e) => e.id === id )]);
    setComplete([...complete, todos.find((el) => el.id === id)]);
    setToDos(todos.filter((el) => el.id !== id));
  };

  return (
    <ul>
      <h2 style={{ color: "red" }}>🏃Proceeding</h2>
      {todos.map((el) => {
        return (
          <li key={el.id} style={{ margin: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <h3 style={{ margin: "5px" }}>{el.title}</h3>
            <div style={{ margin: "5px" }}>{el.content}</div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
              <button style={{ margin: "5px" }} onClick={() => { removeToDo(el.id) }}>삭제</button>
              <button style={{ margin: "5px" }} onClick={() => { completeToDo(el.id) }}>{todos.completed ? `취소` : `완료`}</button>
            </div>
          </li>
        )
      })}
    </ul>
  );
}

export default Proceeding;
