import React from 'react';
import DefaultLayout from 'containers/DefaultLayout/DefaultLayout';
import InnerPage from 'components/InnerPage/InnerPage';
import { InnerHeader } from 'containers/Header';
import Universities from 'containers/Universities';

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
          <Universities />
        </InnerPage>
      </DefaultLayout>
    );
  }
}

IndexLayout.propTypes = {
};

export default IndexLayout;
