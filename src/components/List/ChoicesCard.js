import React, { PropTypes } from 'react';
import { kFormatter, getPercentageString, getMatchRange } from 'modules/helpers';
import _capitalize from 'lodash/capitalize';
import { UniversityHeader } from 'components/Header';
import classes from './ChoicesCard.scss';

const ChoicesCard = ({ distance, animationClass, university, onTouchMove, onTouchStart, onTouchEnd }) => (
  <div
    className={`${classes.choicesCardContainer} ${classes[animationClass]}`}
    onTouchMove={onTouchMove}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    {...(distance !== 0 && (distance > 0 ? {
      style: {
        transform: `translateX(${distance}px) translateY(-${distance / 10}px) rotate(-2deg) scale(0.9)`
      }
    } : {
      style: {
        transform: `translateX(${distance}px) translateY(${Math.abs(distance) / 10}px) rotate(${Math.abs(distance) / 15}deg)`
      }
    }))}
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
