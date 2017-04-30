import React, { Component, PropTypes } from 'react'
import MockApi from 'api';

import CloseIcon from 'material-ui/svg-icons/navigation/close';
import CheckIcon from 'material-ui/svg-icons/navigation/check';
import FloatingActionButton from 'material-ui/FloatingActionButton';

class Universities extends Component {
  static propTypes = {

  }

  constructor() {
    super();

    this.state = {
      universities: null
    };
  }

  componentDidMount() {
    MockApi.getUniversities().then(universities => this.setState({
      universities: universities.data
    }));
  }

  render() {
    const { universities } = this.state;

    return (
      <div>
        <ul>
          {universities && universities.map(university => {
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
    );
  }
}

export default Universities;
