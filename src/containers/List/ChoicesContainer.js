import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Choices } from 'components/List';
import { chooseUniversity } from 'store/actions/thunks';

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
    const { choices } = this.props;

    return (
      <Choices
        choices={choices}
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
