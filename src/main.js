import React from 'react';
import ReactDOM from 'react-dom';
import browserHistory from 'store/router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createStore} from './store/storeHandler';
import AppContainer from './containers/AppContainer';
import { thunks } from './store/actions';

// ========================================================
// Store and History Instantiation
// ========================================================
// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the routerKey "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
const initialState = window.___INITIAL_STATE__;
const store = createStore(initialState, browserHistory);
const history = browserHistory;

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEBUG__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open();
  }
}

// ========================================================
// Some components use react-tap-event-plugin to listen for touch events
// because onClick is not fast enough This dependency is temporary and will eventually go away.
// Until then, be sure to inject this plugin at the start of your app.
// ========================================================
injectTapEventPlugin();

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');

let render = (routerKey = null) => {
  const routes = require('./routes/index').default(store);

  ReactDOM.render(
    <AppContainer
      store={store}
      history={history}
      routes={routes}
      routerKey={routerKey}
    />,
    MOUNT_NODE
  );
};

// Enable HMR and catch runtime errors in RedBox
// This code is excluded from production bundle
if (__DEV__ && module.hot) {
  const renderApp = render;
  const renderError = (error) => {
    const RedBox = require('redbox-react');

    ReactDOM.render(<RedBox error={error} />, MOUNT_NODE);
  };
  render = () => {
    try {
      renderApp(Math.random());
    } catch (error) {
      renderError(error);
    }
  };
  module.hot.accept(['./routes/index'], () => render());
}

// ========================================================
// Go!
// ========================================================
store.dispatch(thunks.fetchUniversities());
render();
