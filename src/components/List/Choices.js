import React, { PropTypes } from 'react';
import ChoicesCard from './ChoicesCard';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import CircularProgress from 'material-ui/CircularProgress';
import classes from './Choices.scss';

const Choices = ({ choices, chooseUniversity, rejectUniversity, isFetching }) => (
  isFetching ? (
    <div className={classes.choicesContainer}>
      <div className={classes.choicesBody}>
        <CircularProgress size={60} thickness={5} color="#CD7254" />
      </div>
    </div>
  ) : (
    <div className={classes.choicesContainer}>
      <div className={classes.choicesBody}>
        {choices.map(university => (
          <ChoicesCard key={university.id} university={university} />
        ))}
      </div>
      <div className={classes.choicesFooter}>
        <FloatingActionButton
          backgroundColor="#CD7254"
          zDepth={0}
          onTouchTap={rejectUniversity}
        >
          <CloseIcon />
        </FloatingActionButton>
        <FloatingActionButton
          zDepth={0}
        >
          <InfoIcon />
        </FloatingActionButton>
        <FloatingActionButton
          backgroundColor="#6C5A6F"
          zDepth={0}
          onTouchTap={chooseUniversity}
        >
          <CheckIcon />
        </FloatingActionButton>
      </div>
    </div>
  )
);

Choices.propTypes = {
  choices: PropTypes.array.isRequired,
  chooseUniversity: PropTypes.func.isRequired,
  rejectUniversity: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default Choices;
