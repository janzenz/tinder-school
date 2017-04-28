import createStoreImpl from './createStore';

let store;

export const createStore = (initialState, history) => {
  store = createStoreImpl(initialState, history);

  return store;
};

export const getStore = () => {
  return store;
};
