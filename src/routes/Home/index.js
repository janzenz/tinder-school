export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const IndexLayout = require('./layouts/IndexLayout').default;

      /*  Return getComponent   */
      cb(null, IndexLayout);

      /* Webpack named bundle   */
    }, 'default');
  }
});
