import React from 'react';
import './App.css';
import TodoContainer from './Container/TodoContainer';

function App(){
  return(
    <div>
      <div className="main">
      <h3>Todo App</h3>
      <TodoContainer/>
      </div>
    </div>
  )
}
export default App;