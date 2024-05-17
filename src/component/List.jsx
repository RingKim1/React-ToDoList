import React from "react";
import Swal from "sweetalert2";

const List = ({ listTitle, todos, setToDos }) => {
  const removeToDo = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setToDos((todos) => todos.filter((el) => el.id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const toggleToDo = (id) => {
    setToDos((todos) =>
      todos.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  };
  return (
    <div>
      <h2>{listTitle}</h2>
      <ul style={{ display: "flex", flexDirection: "row" }}>
        {todos.map((el) => {
          return (
            <li
              key={el.id}
              style={{
                margin: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3 style={{ margin: "5px" }}>{el.title}</h3>
              <div style={{ margin: "5px" }}>{el.content}</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button
                  style={{ margin: "5px" }}
                  onClick={() => {
                    toggleToDo(el.id);
                  }}
                >
                  {el.completed ? `취소` : `완료`}
                </button>
                <button
                  style={{ margin: "5px" }}
                  onClick={() => {
                    removeToDo(el.id);
                  }}
                >
                  삭제
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
