import { useState } from 'react'
import './App.css'
import Form from './Form';
import Proceeding from './Procceding';

function App() {
  const initialState = [{ id: 0, title: "제목 예시", content: "내용 예시", completed: false },];

  const [todos, setToDos] = useState(initialState);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const initialStateC = [{ id: 1, title: "제목 예시", content: "내용 예시", completed: true },];
  const [complete, setComplete] = useState(initialStateC);

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

  const cancelToDo = (id) => {
    console.log("취소 버튼 작동 여부 확인");
    setToDos([...todos, complete.find((el) => el.id === id)]);
    setComplete(complete.filter((el) => el.id !== id))
  };

  return (
    <>
      <h1 style={{ color: "whitesmoke", backgroundColor: "olive" }}>TO-DO-List</h1>
      <Form title={title} content={content} todos={todos} setToDos={setToDos} setTitle={setTitle} setContent={setContent}/>
      {/* <Proceeding todos={todos} complete={complete} setToDos={setToDos} setComplete={setComplete}/> */}
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
      <hr></hr>
      <ul>
        <h2>🎯Complete</h2>
        {complete.map((el) => {
          return (
            <li key={el.id} style={{ margin: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ margin: "5px" }}>{el.title}</h3>
              <div style={{ margin: "5px" }}>{el.content}</div>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <button style={{ margin: "5px" }} onClick={() => { cancelToDo(el.id) }}>취소</button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App;
