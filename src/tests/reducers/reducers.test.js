import expect from 'expect';
import df from 'deep-freeze-strict';

import reducers from './../../reducers/reducers';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Some search text'
      };

      const res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle show completed', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      };

      const res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toBe(true);
    });
  });
});
