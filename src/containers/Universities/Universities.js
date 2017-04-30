import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import CloseIcon from 'material-ui/svg-icons/navigation/close';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import CircularProgress from 'material-ui/CircularProgress'

class Universities extends Component {
  static propTypes = {
    items: PropTypes.array,
    isFetching: PropTypes.bool
  }

  render() {
    const { items, isFetching } = this.props;

    return (
      isFetching ? (
        <CircularProgress color="#CD7254" />
      ) : (
        <div>
          <ul>
            {items && items.map(university => {
              return (<li key={university.id}>{university.displayName}</li>);
            })}
          </ul>
          <div>
            <FloatingActionButton backgroundColor="#CD7254" zDepth={0}>
              <CloseIcon />
            </FloatingActionButton>
            <FloatingActionButton backgroundColor="#6C5A6F" zDepth={0}>
              <CheckIcon />
            </FloatingActionButton>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.universities
  };
};

export default connect(mapStateToProps)(Universities);
