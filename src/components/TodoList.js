import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import TodoAPI from './../api/TodoAPI';

const TodoList = (props) => {

const {todos, showCompleted, searchText} = props.state;
  const renderTodos = () => {
    if (todos.length === 0) {
      return <p className="container__message">Nothing to do</p>
    }
    return (
      <ul>
        {TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => <Todo key={todo.id} {...todo}/>)}
      </ul>
    );
  };

  return (
    <div>
      {renderTodos()}
    </div>
  );
}

const wrapped = connect(
  (state) => {
    return {
      state
    };
  }
)(TodoList);
export {wrapped as default, TodoList};
