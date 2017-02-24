import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import {Provider} from 'react-redux';

import {AddTodo} from './../../components/AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch ADD_TODO when valid todo text', () => {
    const todoText = 'hello';
    const action = {
      type: 'ADD_TODO',
      text: todoText
    }
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
    const form = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
    ReactDOM.findDOMNode(addTodo.inputTodo).value = todoText;
    TestUtils.Simulate.submit(form);
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid input text', () => {
    const spy = expect.createSpy();

    const addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    const form = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
    ReactDOM.findDOMNode(addTodo.inputTodo).value = '';
    TestUtils.Simulate.submit(form);

    expect(spy).toNotHaveBeenCalled();
  });
});
