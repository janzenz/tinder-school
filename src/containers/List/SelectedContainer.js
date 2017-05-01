import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Selected } from 'components/List';
import { viewUniversity } from 'store/actions/creators';

class SelectedContainer extends Component {
  static propTypes = {
    selected: PropTypes.array,
    viewUniversity: PropTypes.func.isRequired
  }

  onClick = (universityId) => {
    this.props.viewUniversity(universityId);
  }

  render() {
    const { selected } = this.props;

    return (
      <Selected selected={selected} onClick={this.onClick} />
    );
  }
}

const mapStateToProps = (state) => ({
  selected: state.universities.selected
});

const mapActionsToProps = {
  viewUniversity
};

export default connect(mapStateToProps, mapActionsToProps)(SelectedContainer);
