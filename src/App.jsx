import { useState } from 'react'
import './App.css'

function App() {
  const initialState = [{ id: 0, title: "제목 예시", content: "내용 예시", completed: false },];

  const [todos, setToDos] = useState(initialState);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const initialStateC = [{ id: 0, title: "완료 제목 예시", content: "완료 내용 예시", completed: true },];
  const [complete, setComplete] = useState(initialStateC);

  const addToDo = (e) => {
    console.log("추가 버튼 작동 여부 확인");
    e.preventDefault();
    if (!title || !content) { alert("제목과 내용을 모두 입력해주세요"); return; }
    setToDos([...todos, { id: Date.now(), title: title, content: content }])
  };

  const removeToDo = (id) => {
    console.log("삭제 버튼 작동 여부 확인");
    setToDos(todos.filter((todo) => todo.id !== id));
  };

  const completeToDo = (id) => {
    console.log("완료 버튼 작동 여부 확인");
    // setComplete([...complete, ...todos.filter((e) => e.id === id )]);
    setComplete([...complete, todos.find((e) => e.id === id )]);
    setToDos(todos.filter((e) => e.id !== id));
  };

  const cancelToDo = (id) => {
    console.log("취소 버튼 작동 여부 확인");
    setToDos([...todos, complete.find((e) => e.id === id)]);
    setComplete(complete.filter((e) => e.id !== id))
  };



  return (
    <>
      <h1 style={{ color: "whitesmoke", backgroundColor: "olive" }}>TO-DO-List</h1>
      <form onSubmit={addToDo}>
        <input type="text" placeholder="제목" value={title} onChange={(event) => { setTitle(event.target.value) }} />
        <input type="text" placeholder="내용" value={content} onChange={(event) => { setContent(event.target.value) }} />
        <button type="submit">추가</button>
      </form>
      <ul>
        <h2>진행 중...</h2>
        {todos.map((e) => {
          return (
            <li key={e.id} style={{ margin: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ margin: "5px" }}>{e.title}</h3>
              <div style={{ margin: "5px" }}>{e.content}</div>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <button style={{ margin: "5px" }} onClick={() => { removeToDo(e.id) }}>삭제</button>
                <button style={{ margin: "5px" }} onClick={() => { completeToDo(e.id) }}>{todos.completed ? `취소` : `완료`}</button>
              </div>
            </li>
          )
        })}
      </ul>
      <hr></hr>
      <ul>
        <h2>완료!</h2>
        {complete.map((e) => {
          return (
            <li key={e.id} style={{ margin: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ margin: "5px" }}>{e.title}</h3>
              <div style={{ margin: "5px" }}>{e.content}</div>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <button style={{ margin: "5px" }} onClick={() => { cancelToDo(e.id) }}>취소</button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App;
