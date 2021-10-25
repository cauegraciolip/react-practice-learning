import React, { useState } from "react";
import Tasks from "./components/Tasks";
import { v4 as uuidv4} from "uuid";

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

  const handleTaskCompleted = (taskId) => {
    const newTask = tarefas.map((task) => {
      if(task.id === taskId) return { ...task, completed: !task.completed }

      return task
    })

    setTarefas(newTask)
  }



  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tarefas, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]
    setTarefas(newTask)
  }

  return (
    <>
      <div className="container">
        <AddButton handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tarefas} handleTaskCompleted={handleTaskCompleted} />
      </div>
    </>
  );
};

export default App;
