import React from "react";
import Item from "./Item";

const List = ({ listTitle, todos, setToDos }) => {
  return (
    <div>
      <h2>{listTitle}</h2>
      <ul style={{ display: "flex", flexDirection: "row" }}>
        {todos.map((el) => {
          return <Item el={el} setToDos={setToDos} />;
        })}
      </ul>
    </div>
  );
};

export default List;
