import _ from 'lodash';
import delay from './delay';
import pictures from './data/pictures';
import users from './data/users';
import universities from './data/universities';

const db = {
  pictures,
  users,
  universities
};

class Api {
  static getUsers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, {data: db.users}));
      }, delay);
    });
  }

  static getUniversities() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, {data: db.universities}));
      }, delay);
    });
  }
}

export default Api;
