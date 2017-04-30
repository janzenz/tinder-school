import React, { PropTypes } from 'react';

const Selected = ({ selected }) => (
  <ul>
    {selected && selected.map(university => {
      return (<li key={university.id}>{university.displayName}</li>);
    })}
  </ul>
);

Selected.propTypes = {
  selected: PropTypes.array
}

export default Selected;
