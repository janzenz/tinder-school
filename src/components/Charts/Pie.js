import React, { PropTypes } from 'react'
import { colors } from 'static/colorsPalette';
import classes from './Pie.scss';

const Pie = ({ value, remaining, primary }) => (
  <svg
    viewBox="0 0 40 40"
    className={classes.pieContainer}
  >
    <circle
      cx="20"
      cy="20"
      r="18"
      fill="none"
      stroke={colors.swirl}
      strokeWidth="2"
    />
    <circle
      cx="20"
      cy="20"
      r="18"
      fill="none"
      stroke={colors.acapulco}
      strokeWidth="2"
      strokeDasharray={[value, remaining]}
      {...(primary ?
        { strokeDashoffset: (value + 15) } :
        { strokeDashoffset: 15 }
      )}
    />
  </svg>
);

Pie.propTypes = {
  value: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
  primary: PropTypes.bool
};

Pie.defaultProps = {
  primary: false
};

export default Pie;
