import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SelectedItem = ({ university }) => (
  <Link to={`/my-universities/${university.id}`}>
    {university.displayName}
  </Link>
);

SelectedItem.propTypes = {
  university: PropTypes.object.isRequired
};

export default SelectedItem;
