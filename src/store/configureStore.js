import redux, { combineReducers, compose, createStore } from 'redux';

import reducers from './../reducers/reducers';
const { searchTextReducer, showCompletedReducer, todosReducer } = reducers;

const configure = () => {
  const reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}

export default configure;
