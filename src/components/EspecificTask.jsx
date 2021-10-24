import React from "react";

import "./EspecificTask.css";

const EspecificTask = ({ tarefas }) => {
  return <div className="task-container">{tarefas.title}</div>;
};

export default EspecificTask;
