// TODO: Might not be perfect so look into this again later.
import { createSelector } from 'reselect';
import _find from 'lodash/find';

const universityListSelector = state => state.universities.selected;
const activeUniversitySelector = state => state.universities.active;
const seeAllSelector = state => state.universities.seeAll;

export const getSelectedUniversities = createSelector(
  universityListSelector,
  seeAllSelector,
  (universities, seeAll) => {
    if (seeAll) {
      return universities;
    }

    return universities.slice(0, 3);
  }
);

export const universitySelector = createSelector(
  universityListSelector,
  activeUniversitySelector,
  (universities, id) => {
    return _find(universities, { id });
  }
);
