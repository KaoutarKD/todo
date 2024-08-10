import React from 'react';
import logo from './todo.jpg';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
        <img src={logo} className="logo" alt="logo" />
        <HomePage/>
      
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   useEffect(() => {
//     axios.get('http://localhost:5000/tasks')
//       .then(response => setTasks(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   const addTask = () => {
//     axios.post('http://localhost:5000/tasks', { name: newTask })
//       .then(response => setTasks([...tasks, response.data]))
//       .catch(error => console.log(error));
//     setNewTask('');
//   };

//   return (
//     <div className="App">
//       <h1>Todo App</h1>
//       <input
//         type="text"
//         value={newTask}
//         onChange={e => setNewTask(e.target.value)}
//         placeholder="Add a new task"
//       />
//       <button onClick={addTask}>Add Task</button>
//       <ul>
//         {tasks.map(task => (
//           <li key={task._id}>{task.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
