import React from 'react'
import './App.css';
import Main from './Components/Main'
import {TaskContext} from './hooks/TaskContext';

function App() {
  return (
    <TaskContext>
      <Main />
    </TaskContext>
  );
}

export default App;
