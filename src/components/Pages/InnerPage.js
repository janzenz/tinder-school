import React, { PropTypes } from 'react';
import classes from './InnerPage.scss';

export const InnerPage = ({ style, titleText, backgroundClass, children }) => {
  return(
    <div
      style={style}
      className={`${classes.genericLockedWrapper} ${classes[backgroundClass]}`}
    >
      <div className={classes.contentWrapper}>
        <div className={classes.title}>
          <span className={classes.titleText}>{titleText}</span>
        </div>
        <div className={classes.contentText}>
          {children}
        </div>
      </div>
    </div>
  );
};

InnerPage.propTypes = {
  style: PropTypes.object,
  titleText: PropTypes.string,
  backgroundClass: PropTypes.string,
  children: PropTypes.node
};

export default InnerPage;
