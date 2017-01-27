import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {todos} = this.props;
    const renderTodos = () => {
      if (todos.length === 0) {
        return <p className="container__message">Nothing to do</p>
      }
      return (
        <ul>
          {todos.map((todo) => <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>)}
        </ul>
      );
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}

export default TodoList;
