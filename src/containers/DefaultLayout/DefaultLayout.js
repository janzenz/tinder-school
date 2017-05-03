import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import DefaultHeader from 'containers/Header';
import muiThemeable from 'material-ui/styles/muiThemeable';

export class DefaultLayout extends React.Component {
  static propTypes = {
    backgroundColor: PropTypes.string
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { backgroundColor } = this.props;
    const mainStyle = {
      backgroundColor
    };
    mainStyle.paddingTop = this.props.muiTheme.appBar.height;

    return (
      <div>
        {this.props.Header}
        <div style={mainStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

DefaultLayout.propTypes = {
  Header: React.PropTypes.element,
  children: React.PropTypes.element.isRequired,
  muiTheme: React.PropTypes.object.isRequired
};

DefaultLayout.defaultProps = {
  Header: <DefaultHeader />
};

const mapActionCreators = {
};

const mapStateToProps = (state) => {
  return {
  };
};

export default muiThemeable()(connect(mapStateToProps, mapActionCreators)(DefaultLayout));
