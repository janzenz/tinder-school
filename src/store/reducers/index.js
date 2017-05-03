import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import universities from './universities';

/* Overview of the State Shape */
/*
universities: {
  isFetching: false,
  choices: [],
  selected: [],
  rejected: [],
  active: null,
  seeAll: false,
  recentUniversityId: null,
  recentAction: null
}
*/

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    universities,
    // Default reducers
    routing,
    ...asyncReducers
  });
};

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
