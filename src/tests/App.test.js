import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from './../App';

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
});
