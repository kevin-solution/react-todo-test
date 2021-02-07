import React from 'react';

import TodoList from './page/TodoList';
import Todos from './mock/todos.json';

import './App.css';

function App() {
  const [todos] = React.useState(Todos);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo</h1>
      </header>

      <div className="container">
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
