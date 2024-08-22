import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const options = categories.filter(category => category !== 'All');
  const [newTask, setNewTask] = useState({
    text: '',
    category: 'Code'
  })

  function handleChange(event) {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value
    })
    console.log(newTask);
  };


  return (
    <form className="new-task-form" onSubmit={(event) => {
      event.preventDefault();
      onTaskFormSubmit(newTask);
      setNewTask({
        text: '',
        category: 'Code'
      })
    }}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newTask.text}
          onChange={handleChange} 
        />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {/* render <option> elements for each category here */}
          {options.map(category => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
