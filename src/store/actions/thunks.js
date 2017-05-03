import * as creators from './creators';
import MockApi from 'api';
import * as constants from 'config/constants';

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

export const chooseUniversity = (choose) => {
  return (dispatch, getState) => {
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
  };
};
