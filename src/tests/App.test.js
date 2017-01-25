import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
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
  });

  it('should toggle completed value when handleToggle called', () => {
      const todoData = {
        id: 11,
        text: 'Test features',
        completed: false
      };
      const app = TestUtils.renderIntoDocument(<App />);
      app.setState({todos: [todoData]});
      expect(app.state.todos[0].completed).toBe(false);

      app.handleToggle(app.state.todos[0].id);
      expect(app.state.todos[0].completed).toBe(true);
  });
});
