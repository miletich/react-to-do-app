import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import actions from './actions/actions';

import App from './App';
import './index.css';

//import actions from './actions/actions';
import TodoAPI from './api/TodoAPI';
import configureStore from './store/configureStore';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  TodoAPI.setTodos(state.todos);
});

const initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
