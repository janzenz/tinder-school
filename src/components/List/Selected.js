import React, { PropTypes } from 'react';
import { SelectedItem } from 'containers/List';
import { List } from 'material-ui/List';
import classes from './Selected.scss';

// TODO: Display empty selected items.
const Selected = ({ selected, onClick }) => (
  <div className={classes.selectedContainer}>
    <div className={classes.selectedHeader}>
      <h2>{`Target Universities (${selected.length})`}</h2>
    </div>
    <div className={classes.selectedBody}>
      <List>
        {selected && selected.map(university => {
          return (
            <SelectedItem
              key={university.id}
              university={university}
              onClick={onClick}
            />
          );
        })}
      </List>
    </div>
  </div>
);

Selected.propTypes = {
  selected: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Selected;
