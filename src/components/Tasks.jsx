import React from "react";
import EspecificTask from "./EspecificTask";

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((title) => (
        <EspecificTask tarefas={title} />
      ))}
    </>
  );
};

export default Tasks;
