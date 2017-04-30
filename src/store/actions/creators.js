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

export const pickUniversity = (university) => ({
  type: types.PICK_UNIVERSITY,
  university
});
