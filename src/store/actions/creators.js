import * as types from './types';

export const requestUniversities = () => ({
  type: types.REQUEST_UNIVERSITIES
});

export const receiveUniversities = (universities) => ({
  type: types.RECEIVE_UNIVERSITIES,
  universities
});

export const popUniversity = () => ({
  type: types.POP_UNIVERSITY
});

export const acceptUniversity = (university) => ({
  type: types.ACCEPT_UNIVERSITY,
  university
});

export const cleanUpRecentState = () => ({
  type: types.CLEANUP_RECENT_STATE
});

export const rejectUniversity = (university) => ({
  type: types.REJECT_UNIVERSITY,
  university
});

export const viewUniversity = (universityId) => ({
  type: types.VIEW_UNIVERSITY,
  universityId
});

export const toggleSeeAll = (toggle) => ({
  type: types.TOGGLE_SEE_ALL,
  toggle
});
