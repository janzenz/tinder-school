import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import KeyboardDownIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import KeyboardUpIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import { colors } from 'static/colorsPalette';
import classes from './Accordion.scss';

const Accordion = ({ showExpand, expand, toggleExpand, children, bindContainer }) => (
  <div
    ref={(container) => bindContainer(container)}
    className={classes.accordionContainer}
  >
    <p className={showExpand && (expand ? classes.expand : classes.collapse)}>
      {children}
    </p>
    {showExpand && (expand ? (
      <IconButton onClick={toggleExpand}>
        <KeyboardUpIcon color={colors.iron} />
      </IconButton>
    ) : (
      <IconButton onClick={toggleExpand}>
        <KeyboardDownIcon color={colors.iron} />
      </IconButton>
    ))}
  </div>
);

Accordion.propTypes = {
  expand: PropTypes.bool.isRequired,
  showExpand: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  toggleExpand: PropTypes.func.isRequired,
  bindContainer: PropTypes.func.isRequired
};

export default Accordion;
