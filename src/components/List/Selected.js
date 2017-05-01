import React, { PropTypes } from 'react';
import { SelectedItem } from 'containers/List';
import { List } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
import classes from './Selected.scss';

// TODO: Display empty selected items.
// TODO: Add functionality for the Icon.
const Selected = ({ selected, onClick }) => (
  <div className={classes.selectedContainer}>
    <div className={classes.selectedHeader}>
      <h2>{`Target Universities (${selected.length})`}</h2>
      <IconButton>
        <InfoIcon color="#928572" />
      </IconButton>
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
