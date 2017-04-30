import * as creators from './creators';
import MockApi from 'api';

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
      dispatch(creators.pickUniversity(university[0]));
    } else {
      dispatch(creators.rejectUniversity(university));
    }

    dispatch(creators.popUniversity());
  };
};
