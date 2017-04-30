import React, { PropTypes } from 'react'

const Selected = ({ selected }) => (
  <ul>
    {selected && selected.map(university => {
      return (<li key={university.id}>{university.displayName}</li>);
    })}
  </ul>
);

export default Selected;
