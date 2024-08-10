// import React from 'react';

// function TaskList({ tasks, deleteTask }) {
//   return (
//     <ul>
//       {tasks.map((task, index) => (
//         <li key={index}>
//           {task} <button onClick={() => deleteTask(index)}>Supprimer</button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default TaskList;
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get('/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task._id}>{task.name}</li>
      ))}
    </ul>
  );
};

export default TaskList;
