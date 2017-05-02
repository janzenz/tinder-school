import React, { Component, PropTypes } from 'react'
import { Pie } from 'components/Charts';

class PieContainer extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired
  }

  render() {
    const { value } = this.props;
    const remaining = 100 - value;

    return (
      <Pie value={value} remaining={remaining} />
    );
  }
}

export default PieContainer;
