import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Todo from './../../components/Todo';

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on click', () => {
    const todoData = {
      id: 11,
      text: 'Test features',
      completed: false
    };
    const spy = expect.createSpy();
    const todo = TestUtils.renderIntoDocument(<Todo key={todoData.id} {...todoData} onToggle={spy} />);
    const checkbox = TestUtils.findRenderedDOMComponentWithTag(todo, 'input')
    TestUtils.Simulate.click(checkbox);

    expect(spy).toHaveBeenCalledWith(11);
  });
});
