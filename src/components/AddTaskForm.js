// import React, { useState } from 'react';

// function AddTaskForm() {
//   const [task, setTask] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Task added:', task);
//     setTask('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Add a new task"
//       />
//       <button type="submit">Add Task</button>
//     </form>
//   );
// }

// export default AddTaskForm;

import React, { useState } from 'react';
import api from '../services/api';

const AddTaskForm = ({ onTaskAdded }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/tasks', { name: taskName })
      .then(response => onTaskAdded(response.data))
      .catch(error => console.log(error));
    setTaskName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
