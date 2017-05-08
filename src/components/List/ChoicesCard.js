import React, { PropTypes } from 'react';
import { kFormatter, getPercentageString, getMatchRange } from 'modules/helpers';
import _capitalize from 'lodash/capitalize';
import { UniversityHeader } from 'components/Header';
import classes from './ChoicesCard.scss';

/**
 * This calculates whether to use a right attempt swipe animation or otherwise.
 * @param {integer} distance - The distance between the start of the swipe and end.
 * @return {string} - Returned the class for the swipe.
 */
const getMoveClass = (distance) => {
  if (distance !== 0) {
    return distance > 0 ? (
      classes.attemptMoveRight
    ) : (
      classes.attemptMoveLeft
    );
  }
};

const ChoicesCard = ({ distance, animationClass, university, onTouchMove, onTouchStart, onTouchEnd }) => (
  <div
    className={`
      ${classes.choicesCardContainer}
      ${classes[animationClass]}
      ${getMoveClass(distance)}
    `}
    onTouchMove={onTouchMove}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
  >
    <div className={classes.choicesCardHeader}>
      <UniversityHeader />
    </div>
    <div className={classes.choicesCardBody}>
      <h2>{_capitalize(university.displayName)}</h2>
      <h3>{`${university.location.locality}, ${university.location.country}`}</h3>
      <div className={classes.universityDetails}>
        <div className={classes.infoCol}>
          <h2>{kFormatter(university.nbOfStudents)}</h2>
          <h3>Students</h3>
        </div>
        <div className={classes.infoCol}>
          <h2>{getPercentageString(university.nbOfAdmissions, university.nbOfApplicants)}</h2>
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
      <h4>Goodwall Acceptance Calculator (GAC)</h4>
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
  distance: PropTypes.number.isRequired,
  animationClass: PropTypes.string,
  university: PropTypes.object,
  onTouchMove: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func
};

export default ChoicesCard;
