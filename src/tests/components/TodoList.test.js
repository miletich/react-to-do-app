import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import TodoList from './../../components/TodoList';
//import Todo from './../../components/Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    const todos = [
      {
        id: 1,
        text: 'do something'
      },
      {
        id: 2,
        text: 'do something else'
      }
    ];

    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);

    // Doesn't work???
    // const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    const todosComponents = TestUtils.scryRenderedDOMComponentsWithTag(todoList, 'li');

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    const todos = [];
    const todosList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    const message = TestUtils.findRenderedDOMComponentWithClass(todosList, 'conatiner__message');

    expect(message.innerHTML).toBe('Nothing to do');
  });
});
