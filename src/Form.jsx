import React, {useState} from 'react';



function Form({title, content, todos, setToDos, setTitle, setContent}) {

    const addToDo = (e) => {
        console.log("추가 버튼 작동 여부 확인");
        e.preventDefault();
        if (!title || !content) { alert("제목과 내용을 모두 입력해주세요"); return; }
        setToDos([...todos, { id: Date.now(), title: title, content: content }])
      };

    return (
        <form onSubmit={addToDo}>
            <input type="text" placeholder="제목" value={title} onChange={(event) => { setTitle(event.target.value) }} />
            <input type="text" placeholder="내용" value={content} onChange={(event) => { setContent(event.target.value) }} />
            <button type="submit">추가</button>
        </form>
    );
}

export default Form;
