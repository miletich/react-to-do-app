import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import localStorageMock from './../../__mocks__/localStorage';
import App from './../App';

window.localStorage = localStorageMock;

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    const todoText ='test text';
    const app = TestUtils.renderIntoDocument(<App />);

    app.setState({todos: []});
    app.handleAddTodo(todoText);

    expect(app.state.todos[0].text).toBe(todoText);

    expect(app.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
      const todoData = {
        id: 11,
        text: 'Test features',
        completed: false,
        createdAt: 0,
        completedAt: null
      };
      const app = TestUtils.renderIntoDocument(<App />);
      app.setState({todos: [todoData]});
      expect(app.state.todos[0].completed).toBe(false);

      app.handleToggle(app.state.todos[0].id);
      expect(app.state.todos[0].completed).toBe(true);

      expect(app.state.todos[0].completedAt).toBeA('number');
  });

  it('toggle todo from completed to incomplete', () => {
    const todoData = {
      id: 11,
      text: 'Test features',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };
    const app = TestUtils.renderIntoDocument(<App />);
    app.setState({todos: [todoData]});
    app.handleToggle(app.state.todos[0].id);

    expect(app.state.todos[0].completed).toBe(false);
    expect(app.state.todos[0].completedAt).toNotExist();
  });
});
