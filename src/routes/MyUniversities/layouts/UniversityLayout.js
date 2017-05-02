import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DefaultLayout from 'containers/DefaultLayout/DefaultLayout';
import InnerPage from 'components/InnerPage';
import { InnerHeader } from 'containers/Header';
import { universitySelector } from 'store/selectors/university';

import { UniversityHeader } from 'components/Header';
import _capitalize from 'lodash/capitalize';
import LinearProgress from 'material-ui/LinearProgress';
import { Pie } from 'containers/Charts';
import RaisedButton from 'material-ui/RaisedButton';
import { kFormatter, getPercentageString, getPercentage } from 'modules/helpers';
import { colors } from 'static/colorsPalette';
import classes from './style.scss';
import gridClasses from './grid.scss';

export class IndexLayout extends Component {
  static propTypes = {
    university: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { university } = this.props;

    return (
      <DefaultLayout Header={<InnerHeader />}>
        <InnerPage>
          <UniversityHeader />
          <div>
            <h2>{_capitalize(university.displayName)}</h2>
            <h3>{`${_capitalize(university.location.locality)}, ${_capitalize(university.location.country)}`}</h3>
            <p>{university.about}</p>
            <p>{university.ownershipType.toUpperCase()}</p>
            <LinearProgress
              mode="determinate"
              value={university.userMatchRate}
              color={colors.acapulco}
            />
            <p>{`${university.userMatchRate}% CHANCES TO GET IN (EST.)`}</p>
            <RaisedButton label="Send Message" />
            <p>{university.about}</p>
            <div>
              <img src="http://placehold.it/720x120" />
            </div>
            <div>
              <div style={{ borderBottom: 2 }}>
                <div>
                  <h2>{kFormatter(university.nbOfStudents)}</h2>
                  <h3>Students</h3>
                </div>
                <div>
                  <h2>{getPercentageString(university.nbOfAdmissions, university.nbOfApplicants) || 'N/A'}</h2>
                  <h3>Acceptance</h3>
                </div>
                <div>
                  <h2>{kFormatter(university.tuitionFees)}</h2>
                  <h3>{`Tuition (${university.tuitionFeesCurrency.toUpperCase()})`}</h3>
                </div>
                <ul>
                  <li>{university.email}</li>
                  <li>{university.website || 'N/A'}</li>
                  <li>{`${_capitalize(university.location.locality)}, ${_capitalize(university.location.country)}`}</li>
                </ul>
              </div>
              <RaisedButton label="Financial Aid & Scholarships" />

              <div className={classes.statisticsContainer}>
                <h2>Demographics</h2>
                <h2>{`${Math.round(university.nbOfStudents/university.nbOfTeachers)} : 1`}</h2>
                <p>STUDENT-TEACHER RATIO</p>
                <div className={`${classes.statisticsBody} ${gridClasses.row}`}>
                  <div className={gridClasses.col6}>
                    <Pie value={getPercentage(university.nbOfFemaleStudents, university.nbOfStudents)} />
                    <div className={gridClasses.row}>
                      <div className={gridClasses.col6}>
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
                      <div className={gridClasses.col6}>
                        <h2>{getPercentageString(university.nbOfIntlStudents, university.nbOfStudents)}</h2>
                        <h3>INTERNATIONAL</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </InnerPage>
      </DefaultLayout>
    );
  }
}

IndexLayout.propTypes = {
};

const mapStateToProps = (state) => ({
  university: universitySelector(state)
});

export default connect(mapStateToProps)(IndexLayout);
