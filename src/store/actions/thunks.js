import * as creators from './creators';
import MockApi from 'api';
import * as constants from 'config/constants';
import _debounce from 'lodash/debounce';

export const fetchUniversities = () => {
  return (dispatch) => {
    dispatch(creators.requestUniversities());

    return MockApi.getUniversities()
      .then(universities => {
        dispatch(creators.receiveUniversities(universities.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

const _debouncedChoosing = _debounce((choose, dispatch, getState) => {
  const university = getState().universities.choices.slice(0,1);

  if (choose) {
    dispatch(creators.acceptUniversity(university[0]));
  } else {
    dispatch(creators.rejectUniversity(university[0]));
  }

  setTimeout(() => {
    dispatch(creators.popUniversity());
    dispatch(creators.cleanUpRecentState());
  }, constants.CARD_COMPLETION_TIME);
}, constants.CARD_COMPLETION_TIME, { leading: true, trailing: false });

export const chooseUniversity = (choose) => {
  return (dispatch, getState) => {
    _debouncedChoosing(choose, dispatch, getState);
  };
};
