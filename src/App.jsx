import React, { useState } from "react";
import Tasks from "./components/Tasks";

import "./App.css";
import AddButton from "./components/AddButton";

const App = () => {
  const [tarefas, setTarefas] = useState([
    {
      id: "1",
      title: "Estudar programção",
      completed: false,
    },
    {
      id: "2",
      title: "Ler um livro",
      completed: true,
    },
  ]);

  return (
    <>
      <div className="container">
        <AddButton />
        <Tasks tasks={tarefas} />
      </div>
    </>
  );
};

export default App;
