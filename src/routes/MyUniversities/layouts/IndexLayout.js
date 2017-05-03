import React from 'react';
import DefaultLayout from 'containers/DefaultLayout/DefaultLayout';
import { InnerPage } from 'components/Pages';
import { InnerHeader } from 'containers/Header';
import { Choices, Selected } from 'containers/List';
import { colors } from 'static/colorsPalette';

export class IndexLayout extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <DefaultLayout
        Header={<InnerHeader titleElement="MY UNIVERSITIES" />}
        backgroundColor={colors.acapulco}
      >
        <InnerPage>
          <Choices />
          <Selected />
        </InnerPage>
      </DefaultLayout>
    );
  }
}

IndexLayout.propTypes = {
};

export default IndexLayout;
