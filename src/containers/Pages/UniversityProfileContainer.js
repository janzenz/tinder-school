import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { universitySelector } from 'store/selectors/university';
import { UniversityProfile } from 'components/Pages';

class UniversityProfileContainer extends Component {
  static propTypes = {
    university: PropTypes.object.isRequired
  }

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }

  render() {
    const { university } = this.props;

    return (
      <UniversityProfile university={university} />
    );
  }
}

const mapStateToProps = (state) => ({
  university: universitySelector(state)
});

export default connect(mapStateToProps)(UniversityProfileContainer);
