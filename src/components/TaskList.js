import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {

  function handleDelete(deletedTask) {
    console.log('Task removed:', deletedTask.text);
    const afterDeletedTask = tasks.filter(task => task.text !== deletedTask.text);
    setTasks(afterDeletedTask);
    console.log('After deleting a task:', tasks);
  };

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul>
        {tasks.map(task => (
          <Task key={task.text} text={task.text} category={task.category} onDelete={() => handleDelete(task)} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
