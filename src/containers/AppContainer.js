import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider, connect } from 'react-redux';
import classes from './AppContainer.scss';

export class AppContainer extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    routerKey: PropTypes.number,
    store: PropTypes.object.isRequired,
    authUser: React.PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
  }

  render () {
    const { history, routes, routerKey, store } = this.props;
    return (
      <Provider store={store}>
        <div className={classes.mainScreen}>
          <Router history={history} children={routes} key={routerKey} />
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(AppContainer);
