// TODO: Might not be perfect so look into this again later.
import { createSelector } from 'reselect';
import _find from 'lodash/find';

const universityListSelector = state => state.universities.selected;
const activeUniversitySelector = state => state.universities.active;

export const universitySelector = createSelector(
  universityListSelector,
  activeUniversitySelector,
  (universities, id) => {
    return _find(universities, { id });
  }
);
