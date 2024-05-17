import React, { useState } from "react";

function Form({ setToDos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addToDo = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요");
      return;
    }

    const New = { id: crypto.randomUUID(), title: title, content: content, completed: false };

    setToDos((todos) => [...todos, New]);
  };

  return (
    <form onSubmit={addToDo}>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="내용"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <button type="submit">추가</button>
    </form>
  );
}

export default Form;
