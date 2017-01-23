import React, { Component } from 'react';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the flat'
        },
        {
          id: 3,
          text: 'Read mail'
        },
        {
          id: 4,
          text: 'Learn React'
        }
      ]
    }
  }
  render() {
    const {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
