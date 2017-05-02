import React from 'react';
import classes from './InnerPage.scss';

export const InnerPage = ({titleText, backgroundClass, children}) => {
  return(
    <div className={`${classes.genericLockedWrapper} ${classes[backgroundClass]}`} >
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

export default InnerPage;
