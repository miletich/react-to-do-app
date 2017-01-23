import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import AddTodo from './../../components/AddTodo'

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo if valid new todo passed', () => {
    const spy = expect.createSpy();

    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
    const form = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
    ReactDOM.findDOMNode(addTodo.inputTodo).value = 'go home';
    TestUtils.Simulate.submit(form);

    expect(spy).toHaveBeenCalledWith('go home');
  });

  it('should not call onAddTodo if invalid input passes', () => {
    const spy = expect.createSpy();

    const addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />);
    const form = TestUtils.findRenderedDOMComponentWithTag(addTodo, 'form');
    ReactDOM.findDOMNode(addTodo.inputTodo).value = '';
    TestUtils.Simulate.submit(form);

    expect(spy).toNotHaveBeenCalled();
  });
});
