import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Selected } from 'components/List';

class SelectedContainer extends Component {
  static propTypes = {
    selected: PropTypes.array
  }

  render() {
    const { selected } = this.props;

    return (
      <Selected
        selected={selected}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  selected: state.universities.selected
});

export default connect(mapStateToProps)(SelectedContainer);
