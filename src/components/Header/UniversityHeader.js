import React from 'react';
import classes from './UniversityHeader.scss';

const UniversityHeader = () => {
  return (
    <div
      className={classes.universityHeader}
      style={{
        backgroundImage: `url(http://placehold.it/350x140)`,
        backgroundSize: 'cover'
      }}
    >
      <div
        className={classes.logo}
        style={{
          backgroundImage: `url(http://placehold.it/150x150)`,
          backgroundSize: 'cover'
        }}
      />
    </div>
  );
};

UniversityHeader.propTypes = {

};

export default UniversityHeader;
