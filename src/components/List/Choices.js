import React, { PropTypes } from 'react';
import { ChoicesCard } from 'containers/List';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import CircularProgress from 'material-ui/CircularProgress';
import classes from './Choices.scss';
import GwLogo from 'assets/gw-logo.svg';

const Choices = ({ choices, chooseUniversity, rejectUniversity, isFetching }) => (
  isFetching ? (
    <div className={classes.choicesContainer}>
      <div className={classes.choicesBody}>
        <CircularProgress size={60} thickness={5} />
      </div>
    </div>
  ) : (
    choices.length > 0 ? (
      <div className={classes.choicesContainer}>
        <div className={classes.choicesBody}>
          {choices.map(university => (
            <ChoicesCard key={university.id} university={university} />
          ))}
        </div>
        <div className={classes.choicesFooter}>
          <FloatingActionButton
            secondary
            zDepth={0}
            onTouchTap={rejectUniversity}
          >
            <CloseIcon />
          </FloatingActionButton>
          <FloatingActionButton
            backgroundColor="transparent"
            zDepth={0}
          >
            <InfoIcon />
          </FloatingActionButton>
          <FloatingActionButton
            zDepth={0}
            onTouchTap={chooseUniversity}
          >
            <CheckIcon />
          </FloatingActionButton>
        </div>
      </div>
    ) : (
      <div className={classes.choicesContainer}>
        <div className={classes.choicesBody}>
          <img src={GwLogo} />
        </div>
      </div>
    )
  )
);

Choices.propTypes = {
  choices: PropTypes.array.isRequired,
  chooseUniversity: PropTypes.func.isRequired,
  rejectUniversity: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default Choices;
