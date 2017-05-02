import React, { Component, PropTypes } from 'react';
import DefaultLayout from 'containers/DefaultLayout/DefaultLayout';
import { InnerPage } from 'components/Pages';
import { UniversityProfile } from 'containers/Pages';
import { InnerHeader } from 'containers/Header';

export class UnivesityLayout extends Component {
  static propTypes = {
    university: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <DefaultLayout Header={<InnerHeader />}>
        <InnerPage>
          <UniversityProfile />
        </InnerPage>
      </DefaultLayout>
    );
  }
}

UnivesityLayout.propTypes = {
};

export default UnivesityLayout;
