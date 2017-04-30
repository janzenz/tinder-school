import React from 'react';
import DefaultLayout from 'containers/DefaultLayout/DefaultLayout';
import InnerPage from 'components/InnerPage/InnerPage';
import { InnerHeader } from 'containers/Header';

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
          Hello World
        </InnerPage>
      </DefaultLayout>
    );
  }
}

IndexLayout.propTypes = {
};

export default IndexLayout;
