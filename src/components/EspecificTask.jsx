import React from "react";

import "./EspecificTask.css";

const EspecificTask = ({ tarefas, handleTaskCompleted }) => {
  return <div className="task-container" style={tarefas.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
    <div className="task-title" onClick={() => handleTaskCompleted(tarefas.id)}>
      {tarefas.title}
    </div>
  </div>;
};

export default EspecificTask;
