import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import TodoSearch from './../../components/TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    const searchTextVariable = 'Dog'
    ReactDOM.findDOMNode(todoSearch.searchText).value = searchTextVariable;
    TestUtils.Simulate.change(ReactDOM.findDOMNode(todoSearch.searchText));

    expect(spy).toHaveBeenCalledWith(false, searchTextVariable);
  });

  it('should call onSearch with propper checked value', () => {
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

    ReactDOM.findDOMNode(todoSearch.showCompleted).checked = true;
    TestUtils.Simulate.change(ReactDOM.findDOMNode(todoSearch.showCompleted));

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
