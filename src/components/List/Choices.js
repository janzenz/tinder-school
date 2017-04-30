import React, { PropTypes } from 'react'
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const Choices = ({ choices, chooseUniversity, rejectUniversity }) => (
  <div>
    <ul>
      {choices && choices.map(university => {
        return (<li key={university.id}>{university.displayName}</li>);
      })}
    </ul>
    <div>
      <FloatingActionButton
        backgroundColor="#CD7254"
        zDepth={0}
        onTouchTap={rejectUniversity}
      >
        <CloseIcon />
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
);

Choices.propTypes = {
  choices: PropTypes.array,
  chooseUniversity: PropTypes.func,
  rejectUniversity: PropTypes.func
};

export default Choices;
