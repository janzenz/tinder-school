import { types } from '../actions';
import { combineReducers } from 'redux';

const choices = (state = [], action) => {
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
    case types.ACCEPT_UNIVERSITY:
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

// This keeps track of the recent actioned University
const recentUniversityId = (state = null, action) => {
  switch(action.type) {
    case types.ACCEPT_UNIVERSITY:
    case types.REJECT_UNIVERSITY:
      return action.university.id;
    case types.CLEANUP_RECENT_STATE:
      return null;
    default:
      return state;
  }
};

const recentAction = (state = null, action) => {
  switch(action.type) {
    case types.ACCEPT_UNIVERSITY:
      return types.ACCEPT_UNIVERSITY;
    case types.REJECT_UNIVERSITY:
      return types.REJECT_UNIVERSITY;
    case types.CLEANUP_RECENT_STATE:
      return null;
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

const active = (state = null, action) => {
  switch(action.type) {
    case types.VIEW_UNIVERSITY:
      return action.universityId;
    default:
      return state;
  }
};

const seeAll = (state = false, action) => {
  switch(action.type) {
    case types.TOGGLE_SEE_ALL:
      return action.toggle;
    default:
      return state;
  }
};

export default combineReducers({
  isFetching,
  choices,
  selected,
  rejected,
  active,
  seeAll,
  recentUniversityId,
  recentAction
});
