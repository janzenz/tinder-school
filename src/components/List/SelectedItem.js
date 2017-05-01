import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SelectedItem = ({ university, onClick }) => {
  return (
    <Link
      to={`/my-universities/${university.id}`}
      onClick={onClick}
    >
      {university.displayName}
    </Link>
  );
};

SelectedItem.propTypes = {
  university: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default SelectedItem;
