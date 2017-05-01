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

// TODO: improve naming for `pick` and `reject`
export const pickUniversity = (university) => ({
  type: types.PICK_UNIVERSITY,
  university
});

export const rejectUniversity = (university) => ({
  type: types.REJECT_UNIVERSITY,
  university
});

export const viewUniversity = (universityId) => ({
  type: types.VIEW_UNIVERSITY,
  universityId
});
