import * as creators from './creators';
import MockApi from 'api';

export const fetchUniversities = () => {
  return (dispatch) => {
    dispatch(creators.requestUniversities());

    return MockApi.getUniversities()
      .then(universities => {
        dispatch(creators.receiveUniversities(universities));
      })
      .catch(error => {
        throw error;
      });
  };
};
