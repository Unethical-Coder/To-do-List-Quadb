import React from 'react';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="header">To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
