import React, { useState } from 'react';

function AddTaskForm() {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task added:', task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
