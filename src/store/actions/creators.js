import * as types from './types';

export const requestUniversities = () => ({
  type: types.REQUEST_UNIVERSITIES
});

export const receiveUniversities = (universities) => ({
  type: types.RECEIVE_UNIVERSITIES,
  universities
});
