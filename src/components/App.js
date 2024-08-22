import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksData, setTasksData] = useState(TASKS);

  function handleSubmit(newTask) {
    setTasksData([
      ...tasksData,
      newTask
    ])
  };
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} tasks={tasksData} setTasks={setTasksData} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleSubmit} />
      <TaskList tasks={tasksData} setTasks={setTasksData} />
    </div>
  );
}

export default App;
