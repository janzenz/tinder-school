import React, { Component, PropTypes } from 'react';
import { SelectedItem } from 'components/List';

class SelectedItemContainer extends Component {
  static propTypes = {
    university: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
  }

  onClick = () => {
    const { university, onClick } = this.props;
    onClick(university.id);
  }

  render() {
    const { university } = this.props;

    return (
      <SelectedItem
        university={university}
        onClick={this.onClick}
      />
    );
  }
}

export default SelectedItemContainer;
