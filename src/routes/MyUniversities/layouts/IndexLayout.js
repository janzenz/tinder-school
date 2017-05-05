import React, { PropTypes } from 'react';
import DefaultLayout from 'containers/DefaultLayout/DefaultLayout';
import { InnerPage } from 'components/Pages';
import { InnerHeader } from 'containers/Header';
import { Choices, Selected } from 'containers/List';
import { colors } from 'static/colorsPalette';
import muiThemeable from 'material-ui/styles/muiThemeable';

export class IndexLayout extends React.Component {
  static propTypes = {
    muiTheme: PropTypes.object
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { muiTheme } = this.props;

    return (
      <DefaultLayout
        Header={
          <InnerHeader
            backgroundColor={colors.acapulco}
            titleElement="MY UNIVERSITIES"
          />
        }
      >
        <InnerPage style={{ paddingTop: muiTheme.appBar.height }}>
          <Choices />
          <Selected />
        </InnerPage>
      </DefaultLayout>
    );
  }
}

IndexLayout.propTypes = {
};

export default muiThemeable()(IndexLayout);
