import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import Header from '../components/Header';

function HomePage() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <Header />
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default HomePage;
