import React from 'react';
import AppBar from 'material-ui/AppBar';
import GwLogo from 'assets/gw-logo.svg';
import classes from './DefaultHeader.scss';

let titleElementStyle = {
  display: 'flex',
  justifyContent: 'center',
  overflow: 'visible'
};

export default class Header extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <AppBar
          style={{position: 'fixed'}}
          title={this.renderAppBarTitle()}
          titleStyle={titleElementStyle}
          showMenuIconButton={false}
        />
      </div>
    );
  }

  renderAppBarTitle() {
    return(
      <div className={classes.appBarTitleCtn}>
        <div>
          <img className={classes.gwLogo} src={GwLogo} />
        </div>
      </div>
    );
  }
}

Header.propTypes = {

};
