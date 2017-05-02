import React, { Component, PropTypes } from 'react'
import { Pie } from 'components/Charts';

class PieContainer extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    primary: PropTypes.bool
  }

  render() {
    const { value, primary } = this.props;
    const remaining = 100 - value;

    return (
      <Pie primary={primary} value={value} remaining={remaining} />
    );
  }
}

export default PieContainer;
