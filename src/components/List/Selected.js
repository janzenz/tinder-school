import React, { PropTypes } from 'react';
import { SelectedItem } from 'containers/List';
import { List } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
import FlatButton from 'material-ui/FlatButton';
import { colors } from 'static/colorsPalette';
import classes from './Selected.scss';

const styles = {
  infoButton: {
    position: 'absolute'
  }
}
// TODO: Display empty selected items.
// TODO: Add functionality for the Icon.
const Selected = ({ selected, total, seeAll, onClick, onToggleView }) => (
  <div className={classes.selectedContainer}>
    <div className={classes.selectedHeader}>
      <h2>{`Target Universities (${total})`}</h2>
      <IconButton style={styles.infoButton}>
        <InfoIcon color={colors.stonewall} />
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
    {total > 3 && (
      <div className={classes.selectedFooter}>
        <FlatButton
          fullWidth
          onClick={onToggleView}
          label={seeAll ? 'Collapse' : 'See All'}
        />
      </div>
    )}
  </div>
);

Selected.propTypes = {
  onClick: PropTypes.func.isRequired,
  onToggleView: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  seeAll: PropTypes.bool.isRequired
};

export default Selected;
