import CoreLayoutContainer from 'containers/CoreLayout';
import HomeRoute from './Home';

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayoutContainer,
  indexRoute: HomeRoute(store)
});

export default createRoutes;
