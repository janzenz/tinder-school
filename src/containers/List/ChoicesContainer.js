import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Choices } from 'components/List';
import { chooseUniversity } from 'store/actions/thunks';
import * as constants from 'config/constants';
import _debounce from 'lodash/debounce';

class ChoicesContainer extends Component {
  static propTypes = {
    choices: PropTypes.array,
    isFetching: PropTypes.bool,
    chooseUniversity: PropTypes.func
  }

  chooseUniversity = () => {
    this.props.chooseUniversity(true);
  }

  rejectUniversity = () => {
    this.props.chooseUniversity(false);
  }

  render() {
    const { choices, isFetching } = this.props;

    return (
      <Choices
        choices={choices}
        isFetching={isFetching}
        chooseUniversity={this.chooseUniversity}
        rejectUniversity={this.rejectUniversity}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.universities
  };
};

const mapActionCreators = {
  chooseUniversity
};

export default connect(mapStateToProps, mapActionCreators)(ChoicesContainer);
