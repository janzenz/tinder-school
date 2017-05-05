import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowLeftIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import classes from './InnerHeader.scss';

const styles = {
  titleElementStyle: {
    fontSize: 19,
    fontWeight: 'bold'
  },
  smallIcon: {
    width: 50,
    height: 50
  },
  small: {
    width: 64,
    height: 64,
    padding: 0
  },
  appBar: {
    position: 'fixed',
    top: 0,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    paddingLeft: 0,
    paddingRight: 0
  }
};

export default class InnerHeader extends React.Component {
  static propTypes = {
    titleElement: PropTypes.string,
    backgroundColor: PropTypes.string
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { backgroundColor } = this.props;

    return (
      <AppBar
        style={{ 
          ...styles.appBar,
          backgroundColor
        }}
        titleStyle={styles.titleElementStyle}
        title={this.renderAppBarTitle()}
        iconElementLeft={this.renderIconButtonLeft()}
      />
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

  renderAppBarTitle = () => {
    const { titleElement } = this.props;
    return(
      <div className={classes.appBarTitleCtn}>
        <div>
          {titleElement}
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
