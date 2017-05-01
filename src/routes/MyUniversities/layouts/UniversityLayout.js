import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DefaultLayout from 'containers/DefaultLayout/DefaultLayout';
import InnerPage from 'components/InnerPage';
import { InnerHeader } from 'containers/Header';
import { universitySelector } from 'store/selectors/university';

export class IndexLayout extends Component {
  static propTypes = {
    university: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { university } = this.props;

    return (
      <DefaultLayout Header={<InnerHeader />}>
        <InnerPage>
        </InnerPage>
      </DefaultLayout>
    );
  }
}

IndexLayout.propTypes = {
};

const mapStateToProps = (state) => ({
  university: universitySelector(state)
});

export default connect(mapStateToProps)(IndexLayout);
