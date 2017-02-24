import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import {TodoSearch} from './../../components/TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    const searchText = 'Dog'
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    }
    ReactDOM.findDOMNode(todoSearch.searchText).value = searchText;
    TestUtils.Simulate.change(ReactDOM.findDOMNode(todoSearch.searchText));

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

    ReactDOM.findDOMNode(todoSearch.showCompleted).checked = true;
    TestUtils.Simulate.change(ReactDOM.findDOMNode(todoSearch.showCompleted));

    expect(spy).toHaveBeenCalledWith(action);
  });
});
