import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { Provider } from 'react-redux';

import {Todo} from './../../components/Todo';
import configureStore from './../../store/configureStore';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch TOGGLE_TODO action on click', () => {
    const store = configureStore();
    const todoData = {
      id: 11,
      text: 'Test features',
      completed: false
    };
    const spy = expect.createSpy();
    const todo = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <Todo key={todoData.id} {...todoData} dispatch={spy} />
      </Provider>
    );
    const checkbox = TestUtils.findRenderedDOMComponentWithTag(todo, 'input');
    TestUtils.Simulate.click(checkbox);

    expect(spy).toHaveBeenCalledWith({
      type: "TOGGLE_TODO",
      id: todoData.id
    });

  });
});
