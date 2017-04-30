import React, { PropTypes } from 'react';
import SelectedItem from './SelectedItem';

const Selected = ({ selected }) => (
  <div>
    {selected && selected.map(university => {
      return (
        <SelectedItem
          key={university.id}
          university={university}
        />
      );
    })}
  </div>
);

Selected.propTypes = {
  selected: PropTypes.array
};

export default Selected;
