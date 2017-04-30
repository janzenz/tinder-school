import CoreLayoutContainer from 'containers/CoreLayout';
import HomeRoute from './Home';
import MyUniversitiesRoute from './MyUniversities';

// TODO: Async loading for the Child Routes
export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayoutContainer,
  indexRoute: HomeRoute(store),
  getChildRoutes(location, cb) {
    cb(null, [ MyUniversitiesRoute(store) ]);
  }
});

export default createRoutes;
