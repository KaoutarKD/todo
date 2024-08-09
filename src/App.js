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
