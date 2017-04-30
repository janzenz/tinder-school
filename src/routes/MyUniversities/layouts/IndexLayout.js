import React from 'react';
import DefaultLayout from 'containers/DefaultLayout/DefaultLayout';
import InnerPage from 'components/InnerPage/InnerPage';
import { InnerHeader } from 'containers/Header';
import { Choices, Selected } from 'containers/List';

export class IndexLayout extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <DefaultLayout Header={<InnerHeader />}>
        <InnerPage
          backgroundClass={'defaultBackground'}
        >
          <Choices />
          <h2>Target Universities</h2>
          <Selected />
        </InnerPage>
      </DefaultLayout>
    );
  }
}

IndexLayout.propTypes = {
};

export default IndexLayout;
