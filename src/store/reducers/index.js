import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import universities from './universities';

/* Overview of the State Shape */
/*
universities: {
  isFetching: false,
  items: [],
  selected: [],
  rejected: []
}
*/

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    universities,
    // Default reducers
    router,
    ...asyncReducers
  });
};

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
