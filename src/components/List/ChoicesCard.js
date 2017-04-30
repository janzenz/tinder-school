import React, { PropTypes } from 'react';
import { kFormatter, getPercentage, getMatchRange } from 'modules/helpers';
import classes from './ChoicesCard.scss';

const ChoicesCard = ({ university }) => (
  <div className={classes.choicesCardContainer}>
    <div
      className={classes.choicesCardHeader}
      style={{
        backgroundImage: `url(http://placehold.it/350x150)`,
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
    <div className={classes.choicesCardBody}>
      <h2>{university.displayName.toLowerCase()}</h2>
      <h3>{`${university.location.locality}, ${university.location.country}`}</h3>
      <div className={classes.universityDetails}>
        <div className={classes.infoCol}>
          <h2>{kFormatter(university.nbOfStudents)}</h2>
          <h3>Students</h3>
        </div>
        <div className={classes.infoCol}>
          <h2>{getPercentage(university.nbOfAdmissions, university.nbOfApplicants) || 'NA'}</h2>
          <h3>Acceptance</h3>
        </div>
        <div className={classes.infoCol}>
          <h2>{kFormatter(university.tuitionFees)}</h2>
          <h3>{`Tuition (${university.tuitionFeesCurrency})`}</h3>
        </div>
      </div>
      <div className={classes.universityAbout}>
        <p>{university.about}</p>
      </div>
    </div>
    <div className={classes.choicesCardFooter}>
      <div>Goodwall Acceptance Calculator (GAC)</div>
      <div
        className={classes.universityCalc}
      >
        <div
          className={classes.fill}
          style={{
            left: `${getMatchRange(university.userMatchRate)}%`
          }}
        />
      </div>
      <div className={classes.fillLabels}>
        <div>Dream</div>
        <div>Reach</div>
        <div>Target</div>
        <div>Safety</div>
      </div>
    </div>
  </div>
);

ChoicesCard.propTypes = {
  university: PropTypes.object
};

export default ChoicesCard;
