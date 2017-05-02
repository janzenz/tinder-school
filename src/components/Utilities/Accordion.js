import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import KeyboardDownIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import KeyboardUpIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import classes from './Accordion.scss';

const Accordion = ({ expand, toggleExpand, children }) => (
  <div className={classes.accordionContainer}>
    <p className={expand ? classes.expand : classes.collapse}>
      {children}
    </p>
    {expand ? (
      <IconButton onClick={toggleExpand}>
        <KeyboardUpIcon />
      </IconButton>
    ) : (
      <IconButton onClick={toggleExpand}>
        <KeyboardDownIcon />
      </IconButton>
    )}
  </div>
);

Accordion.propTypes = {
  expand: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  toggleExpand: PropTypes.func.isRequired
};

export default Accordion;
