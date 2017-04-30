import { types } from '../actions';
import { combineReducers } from 'redux';

const items = (state = [], action) => {
  switch(action.type) {
    case types.RECEIVE_UNIVERSITIES:
      return action.universities;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.RECEIVE_UNIVERSITIES:
      return false;
    case types.REQUEST_UNIVERSITIES:
      return true;
    default:
      return state;
  }
};

export default combineReducers({
  isFetching,
  items
});
