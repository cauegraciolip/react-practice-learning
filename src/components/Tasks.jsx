import React from "react";
import EspecificTask from "./EspecificTask";

const Tasks = ({ tasks, handleTaskCompleted }) => {
  return (
    <>
      {tasks.map((title) => (
        <EspecificTask tarefas={title} handleTaskCompleted={handleTaskCompleted} />
      ))}
    </>
  );
};

export default Tasks;
