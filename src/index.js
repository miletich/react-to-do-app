import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import actions from './actions/actions';
import configureStore from './store/configureStore';

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actions.addTodo('clean the yard'));

store.dispatch(actions.setSearchText('yard'));

store.dispatch(actions.toggleShowCompleted());

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
