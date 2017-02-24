import React from 'react';
import {Provider} from 'react-redux';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import configureStore from './../../store/configureStore';
import TodoList from './../../components/TodoList';
import Todo from './../../components/Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    const todos = [
      {
        id: 1,
        text: 'do something',
        completed: false,
        completedAt: null,
        createdAt: 500
      },
      {
        id: 2,
        text: 'do something else',
        completed: false,
        completedAt: null,
        createdAt: 500
      }
    ];
    const store = configureStore({
      todos: todos
    });

    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoList></TodoList>
      </Provider>
    );
    const todoList = TestUtils.scryRenderedComponentsWithType(provider, TodoList)[0];
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    const store = configureStore({
      todos: []
    });
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoList/>
      </Provider>
    );
    const todosList = TestUtils.scryRenderedComponentsWithType(provider, TodoList)[0];
    const message = TestUtils.findRenderedDOMComponentWithTag(todosList, 'P');

    expect(message.innerHTML).toBe('Nothing to do');
  });
});
