import React, { PropTypes } from 'react';

const Selected = ({ children }) => (
  <div>
    {children}
  </div>
);

Selected.propTypes = {
  children: PropTypes.node
};

export default Selected;
