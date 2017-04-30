// TODO: Improve this implementation.
export default (store) => ({
  path: 'my-universities',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const IndexLayout = require('./layouts/IndexLayout').default;

      /*  Return getComponent   */
      cb(null, IndexLayout);

      /* Webpack named bundle   */
    }, 'default');
  }
});

export const UniversityRoute = (store) => ({
  path: 'my-universities/:universityId',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const UniversityLayout = require('./layouts/UniversityLayout').default;

      /*  Return getComponent   */
      cb(null, UniversityLayout);

      /* Webpack named bundle   */
    }, 'default');
  }
});
