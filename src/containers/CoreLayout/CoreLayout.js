import _ from 'lodash';
import React from 'react';
import '../../styles/core.scss';
import defaultTheme from 'static/themes/Default.theme';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import colors from 'static/colorsPalette';

export class CoreLayout extends React.Component {

  componentWillMount() {
    this.setState({
      computedTheme: getMuiTheme(_.merge({}, defaultTheme))
    });
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.theme != nextProps.theme) {
      this.setState({
        computedTheme: getMuiTheme(_.merge({}, defaultTheme))
      });
    }
  }

  render(){
    const {children} = this.props;
    return <MuiThemeProvider muiTheme={this.state.computedTheme}>
      <div style={{backgroundColor: colors.bianca}}>
        {children}
      </div>
    </MuiThemeProvider>;
  }
}

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
};

const mapActionCreators = {};

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps, mapActionCreators)(CoreLayout);
