import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const initialState = [
    { id: 0, title: "제목 예시", content: "내용 예시", completed: false },
    { id: 1, title: "제목 예시1", content: "내용 예시1", completed: true },
  ];
  const [todos, setToDos] = useState(initialState);

  const yetcompleted = todos.filter((el) => !el.completed);
  const completed = todos.filter((el) => el.completed);

  return (
    <section>
      <h1 style={{ color: "whitesmoke", backgroundColor: "olive" }}>
        TO-DO-List
      </h1>
      <Form setToDos={setToDos} />
      <List
        listTitle={"🏃Proceeding"}
        todos={yetcompleted}
        setToDos={setToDos}
      />
      <hr></hr>
      <List listTitle={"🏅Complete"} todos={completed} setToDos={setToDos} />
    </section>
  );
}

export default App;
