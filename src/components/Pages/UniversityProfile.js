import React, { PropTypes } from 'react'
import { UniversityHeader } from 'components/Header';
import _capitalize from 'lodash/capitalize';
import LinearProgress from 'material-ui/LinearProgress';
import { Pie } from 'containers/Charts';
import RaisedButton from 'material-ui/RaisedButton';
import { kFormatter, getPercentageString, getPercentage } from 'modules/helpers';
import { Accordion } from 'containers/Utilities';
// Styles specific import
import { colors } from 'static/colorsPalette';
import classes from './UniversityProfile.scss';

// TODO: This should imported in the core.scss but it doesn't seem to work.
import gridClasses from 'styles/common/grid.scss';

const styles = {
  linearProgress: {
    height: 14,
    width: '90%',
    borderRadius: 9,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  btnContainer: {
    borderRadius: 20,
    width: '80%',
    overflow: 'hidden'
  },
  btnBody: {
    borderRadius: 20
  }
};

const UniversityProfile = ({ university }) => (
  <div className={classes.universityProfileContainer}>
    <div className={classes.universityProfileHeader}>
      <UniversityHeader />
    </div>
    <div className={classes.universityProfileBody}>
      <section className={classes.info}>
        <h1>{_capitalize(university.displayName)}</h1>
        <p>{`${_capitalize(university.location.locality)}, ${_capitalize(university.location.country)}`}</p>
        <p>{university.about}</p>
        <p>{university.ownershipType.toUpperCase()}</p>
        <div className={classes.userMatchRate}>
          <LinearProgress
            style={styles.linearProgress}
            mode="determinate"
            value={university.userMatchRate}
            color={colors.acapulco}
          />
          <p>{`${university.userMatchRate}% CHANCES TO GET IN (EST.)`}</p>
        </div>
        <RaisedButton
          style={styles.btnContainer}
          buttonStyle={styles.btnBody}
          primary
          label="Send Message"
        />
        <Accordion>{university.about}</Accordion>
      </section>
      <div>
        <img src="http://placehold.it/720x120" style={{ width: '100%' }} />
      </div>
      <div>
        <div className={gridClasses.row}>
          <div className={gridClasses.col4}>
            <h2>{kFormatter(university.nbOfStudents)}</h2>
            <h3>Students</h3>
          </div>
          <div className={gridClasses.col4}>
            <h2>{getPercentageString(university.nbOfAdmissions, university.nbOfApplicants) || 'N/A'}</h2>
            <h3>Acceptance</h3>
          </div>
          <div className={gridClasses.col4}>
            <h2>{kFormatter(university.tuitionFees)}</h2>
            <h3>{`Tuition (${university.tuitionFeesCurrency.toUpperCase()})`}</h3>
          </div>
        </div>
        <ul>
          <li>{university.email}</li>
          <li>{university.website || 'N/A'}</li>
          <li>{`${_capitalize(university.location.locality)}, ${_capitalize(university.location.country)}`}</li>
        </ul>
        <RaisedButton
          primary
          style={styles.btnContainer}
          buttonStyle={styles.btnBody}
          label="Financial Aid & Scholarships"
        />

        <div className={classes.statisticsContainer}>
          <h2>Demographics</h2>
          <h2>{`${Math.round(university.nbOfStudents/university.nbOfTeachers)} : 1`}</h2>
          <p>STUDENT-TEACHER RATIO</p>
          <div className={`${classes.statisticsBody} ${gridClasses.row}`}>
            <div className={`${gridClasses.center} ${gridClasses.col6}`}>
              <Pie
                primary
                value={getPercentage(university.nbOfFemaleStudents, university.nbOfStudents)}
              />
              <div className={gridClasses.row}>
                <div className={`${gridClasses.col6} ${classes.primary}`}>
                  <h2>{getPercentageString(university.nbOfFemaleStudents, university.nbOfStudents)}</h2>
                  <h3>FEMALE</h3>
                </div>
                <div className={gridClasses.col6}>
                  <h2>{getPercentageString(university.nbOfMaleStudents, university.nbOfStudents)}</h2>
                  <h3>MALE</h3>
                </div>
              </div>
            </div>
            <div className={gridClasses.col6}>
              <Pie value={getPercentage(university.nbOfIntlStudents, university.nbOfStudents)} />
              <div className={gridClasses.row}>
                <div className={gridClasses.col6}>
                  <h2>{getPercentageString(university.nbOfLocalStudents, university.nbOfStudents)}</h2>
                  <h3>LOCAL</h3>
                </div>
                <div className={`${gridClasses.col6} ${classes.primary}`}>
                  <h2>{getPercentageString(university.nbOfIntlStudents, university.nbOfStudents)}</h2>
                  <h3>INTERNATIONAL</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

UniversityProfile.propTypes = {
  university: PropTypes.object.isRequired
};

export default UniversityProfile;
