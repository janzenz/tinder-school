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
    this._debouncedChoose(true);
  }

  rejectUniversity = () => {
    this._debouncedChoose(false);
  }

  _debouncedChoose = _debounce((accept) => {
    this.props.chooseUniversity(accept);
  }, constants.CARD_COMPLETION_TIME, { leading: true })

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
