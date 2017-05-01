import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import { Link } from 'react-router';
import Avatar from 'material-ui/Avatar';
import ArrowRightIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import _capitalize from 'lodash/capitalize';
import classes from './SelectedItem.scss';

const SelectedItem = ({ university, onClick }) => {
  return (
    <ListItem
      containerElement={<Link to={`/my-universities/${university.id}`} />}
      onClick={onClick}
      leftAvatar={<Avatar src="http://placehold.it/128x128" />}
      rightIcon={<ArrowRightIcon />}
      primaryText={
        <div className={classes.menuTitle}>
          {_capitalize(university.displayName)}
        </div>
      }
    />
  );
};

SelectedItem.propTypes = {
  university: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default SelectedItem;
