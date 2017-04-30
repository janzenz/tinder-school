import { types } from '../actions';
import { combineReducers } from 'redux';

const items = (state = [], action) => {
  switch(action.type) {
    case types.RECEIVE_UNIVERSITIES:
      return action.universities;
    case types.POP_UNIVERSITY:
      return state.slice(1);
    default:
      return state;
  }
};

const selected = (state = [], action) => {
  switch(action.type) {
    case types.PICK_UNIVERSITY:
      return state.concat(action.university);
    default:
      return state;
  }
};

const rejected = (state = [], action) => {
  switch(action.type) {
    case types.REJECT_UNIVERSITY:
      return state.concat(action.university);
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
  items,
  selected,
  rejected
});
