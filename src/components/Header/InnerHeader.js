import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowLeftIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import GwLogo from 'assets/gw-logo.svg';
import classes from './InnerHeader.scss';

const styles = {
  titleElementStyle: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'visible'
  },
  smallIcon: {
    width: 50,
    height: 50
  },
  small: {
    width: 64,
    height: 64,
    padding: 0
  }
};

export default class InnerHeader extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <AppBar
          style={{position: 'fixed'}}
          title={this.renderAppBarTitle()}
          titleStyle={styles.titleElementStyle}
          iconElementLeft={this.renderIconButtonLeft()}
        />
      </div>
    );
  }

  renderIconButtonLeft() {
    return (
      <IconButton
        iconStyle={styles.smallIcon}
        style={styles.small}
        onTouchTap={this.props.router.goBack}
      >
        <ArrowLeftIcon />
      </IconButton>
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

InnerHeader.propTypes = {
  router: PropTypes.shape({
    goBack: PropTypes.func
  })
};
