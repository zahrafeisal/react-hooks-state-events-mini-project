import React, { useState } from "react";

function CategoryFilter({ categories, tasks, setTasks }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  function handleButtonClick(clickedCategory) {
    console.log('Category clicked:', clickedCategory);
    setSelectedCategory(clickedCategory);

    if (clickedCategory === 'All') {
      setTasks(filteredTasks);
    } else {
      const filterByCat = filteredTasks.filter(task => task.category === clickedCategory)
      console.log(filterByCat);
      setTasks(filterByCat);
    }
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(category => (
        <button
          key={category}
          onClick={() => handleButtonClick(category)}
          className={selectedCategory === category ? 'selected' : null}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
