import React, { PropTypes } from 'react'
import { UniversityHeader } from 'components/Header';
import _capitalize from 'lodash/capitalize';
import LinearProgress from 'material-ui/LinearProgress';
import { Pie } from 'containers/Charts';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import { Accordion } from 'containers/Utilities';
import { kFormatter, getPercentageString, getPercentage } from 'modules/helpers';
import _random from 'lodash/random';
import _inRange from 'lodash/inRange';
// Styles specific imports
import { colors } from 'static/colorsPalette';
import classes from './UniversityProfile.scss';

// TODO: This should imported in the core.scss but it doesn't seem to work.
import gridClasses from 'styles/common/grid.scss';

const styles = {
  chanceToGet: {
    height: 14,
    width: '90%',
    borderRadius: 5,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  entryRequirements: {
    height: 10,
    width: '90%',
    borderRadius: 0,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  btnContainer: {
    borderRadius: 20,
    overflow: 'hidden'
  },
  btnBody: {
    borderRadius: 20
  }
};

class Requirements {
  // TODO: Add params injection for real requirements object
  constructor() {
    this.rate = _random(100);
    this.act = _random(10);
    this.gpa = _random(4.5).toFixed(1).replace(/\.0+$/,'');
  }

  translateRate = () => {
    if (_inRange(this.rate, 0, 25)) {
      return 'Easy';
    } else if (_inRange(this.rate, 26, 50)) {
      return 'Moderate';
    } else if (_inRange(this.rate, 51, 75)) {
      return 'Intermediate';
    } if (_inRange(this.rate, 76, 100)) {
      return 'Difficult';
    }
  }

  getGrade = () => {
    return 'ABC'.charAt(_random(2));
  }
}

const requirement = new Requirements();

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
            style={styles.chanceToGet}
            mode="determinate"
            value={university.userMatchRate}
            color={colors.acapulco}
          />
          <p>{`${university.userMatchRate}% CHANCES TO GET IN (EST.)`}</p>
        </div>
        <div className={classes.cta}>
          <RaisedButton
            fullWidth
            primary
            style={styles.btnContainer}
            buttonStyle={styles.btnBody}
            label="Send Message"
          />
        </div>
        <Accordion>{university.about}</Accordion>
      </section>
      <div>
        <img src="http://placehold.it/720x300" style={{ width: '100%' }} />
      </div>
      <section className={classes.scoresContainer}>
        <div className={classes.scoresHeader}>
          <div className={gridClasses.row}>
            <div className={gridClasses.col4}>
              <h2>{kFormatter(university.nbOfStudents)}</h2>
              <h3>STUDENTS</h3>
            </div>
            <div className={gridClasses.col4}>
              <h2>{getPercentageString(university.nbOfAdmissions, university.nbOfApplicants) || 'N/A'}</h2>
              <h3>ACCEPTANCE</h3>
            </div>
            <div className={gridClasses.col4}>
              <h2>{kFormatter(university.tuitionFees)}</h2>
              <h3>{`TUITION (${university.tuitionFeesCurrency.toUpperCase()})`}</h3>
            </div>
          </div>
        </div>
        <div className={classes.scoresBody}>
          <ul>
            <li>N/A</li>
            <li>{university.email}</li>
            <li>{university.website || 'N/A'}</li>
            <li>{`${_capitalize(university.location.locality)}, ${_capitalize(university.location.country)}`}</li>
          </ul>
        </div>
        <div className={classes.cta}>
          <RaisedButton
            primary
            style={styles.btnContainer}
            buttonStyle={styles.btnBody}
            label="Financial Aid & Scholarships"
          />
        </div>
      </section>
      <section>
        <div className={classes.requirementsContainer}>
          <h2>ENTRY REQUIREMENTS</h2>
          <LinearProgress
            style={styles.entryRequirements}
            mode="determinate"
            value={requirement.rate}
            color={colors.acapulco}
          />
          <p>{requirement.translateRate()}</p>
          <List className={classes.details}>
            <Divider />
            <ListItem primaryText="Average Grade (ABC)" rightIcon={<span style={{ textAlign: 'center' }}>{requirement.getGrade()}</span>} />
            <Divider />
            <ListItem primaryText="ACT" rightIcon={<span style={{ textAlign: 'center' }}>{requirement.act}</span>} />
            <Divider />
            <ListItem primaryText="GPA (/4.5)" rightIcon={<span style={{ textAlign: 'center' }}>{requirement.gpa}</span>} />
          </List>
        </div>
      </section>
      <section>
        <div className={classes.statisticsContainer}>
          <h2>DEMOGRAPHICS</h2>
          <div className={classes.statisticsHeader}>
            <div className={`${classes.ratio} ${gridClasses.row}`}>
              <div className={gridClasses.col4}>
                <h2>{Math.round(university.nbOfStudents/university.nbOfTeachers)}</h2>
              </div>
              <div className={gridClasses.col4}>
                <h2>:</h2>
              </div>
              <div className={gridClasses.col4}>
                <h2>1</h2>
              </div>
            </div>
            <p>STUDENT-TEACHER<br />RATIO</p>
          </div>
          <div className={`${classes.statisticsBody} ${gridClasses.row}`}>
            <div className={`${classes.column} ${gridClasses.center} ${gridClasses.col6}`}>
              <Pie
                primary
                value={getPercentage(university.nbOfFemaleStudents, university.nbOfStudents)}
              />
              <div className={`${gridClasses.row} ${classes.statValues}`}>
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
            <div className={`${classes.column} ${gridClasses.center} ${gridClasses.col6}`}>
              <Pie value={getPercentage(university.nbOfIntlStudents, university.nbOfStudents)} />
              <div className={`${gridClasses.row} ${classes.statValues}`}>
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
      </section>
    </div>
  </div>
);

UniversityProfile.propTypes = {
  university: PropTypes.object.isRequired
};

export default UniversityProfile;
