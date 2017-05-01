import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Selected } from 'components/List';
import { viewUniversity, toggleSeeAll } from 'store/actions/creators';
import { getSelectedUniversities } from 'store/selectors/university';

class SelectedContainer extends Component {
  static propTypes = {
    viewUniversity: PropTypes.func.isRequired,
    toggleSeeAll: PropTypes.func.isRequired,
    selected: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    seeAll: PropTypes.bool.isRequired
  }

  onClick = (universityId) => {
    this.props.viewUniversity(universityId);
  }

  onToggleView = () => {
    const { seeAll, toggleSeeAll } = this.props;
    toggleSeeAll(!seeAll);
  }

  render() {
    const { selected, total, seeAll } = this.props;

    return (
      <Selected
        onClick={this.onClick}
        onToggleView={this.onToggleView}
        selected={selected}
        total={total}
        seeAll={seeAll}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  selected: getSelectedUniversities(state),
  total: state.universities.selected.length,
  seeAll: state.universities.seeAll
});

const mapActionsToProps = {
  viewUniversity,
  toggleSeeAll
};

export default connect(mapStateToProps, mapActionsToProps)(SelectedContainer);
