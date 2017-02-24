import React from 'react';
import { Provider } from 'react-redux';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import localStorageMock from './../../__mocks__/localStorage';
import configureStore from './../store/configureStore';
import App from './../App';
import TodoList from './../components/TodoList';

window.localStorage = localStorageMock;

describe('App', () => {
  it('should exist', () => {
    expect(App).toExist();
  });

  it('should render TodoList', () => {
    const store = configureStore();
    const provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <App></App>
      </Provider>
    );

    const app = TestUtils.scryRenderedComponentsWithType(provider, App)[0];
    const todoList = TestUtils.scryRenderedComponentsWithType(app, TodoList);

    expect(todoList.length).toEqual(1);
  });
});
