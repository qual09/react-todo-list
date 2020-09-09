import React from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Meeting with boss',
        completed: false
      },
      {
        id: 3,
        title: 'Walk the dog',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  render() {
    return (
      <div className="App">

        {/* Header */}
        <header className="header">
          <h1>Todo List</h1>
        </header>
        {/* Body */}
        <div className="container">
          <Todos todos={this.state.todos} markComplete={this.markComplete} />
        </div>
        {/* Footer */}
        <footer className="footer">
          &copy; 2020 Hieu CPX. All rights reserved.
          </footer>
      </div>
    );
  }
}

export default App;
