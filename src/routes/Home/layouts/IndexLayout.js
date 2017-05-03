import React from 'react';
import { Link } from 'react-router';
import DefaultLayout from 'containers/DefaultLayout/DefaultLayout';
import WelcomePage from 'components/WelcomePage/WelcomePage';
import RaisedButton from 'material-ui/RaisedButton';

export class IndexLayout extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <DefaultLayout>
        <WelcomePage
          titleText={'Welcome to Goodwall\'s Coding Challenge'}
          backgroundClass={'defaultBackground'}
        >
          <ol>
            <li>
              This project should help you start your coding challenge. But using this project as coding challenge base is not mandatory.
              Candidate is free to use it's own project from scratch but then all other rules will still be mandatory.
            </li>
            <li>
              Candidate can ONLY use libraries that are currently included inside `package.json`. Using some other 3rd
              party libraries or coping source code of other libraries into "Goodwall Coding Challenge" is forbidden.
              If there is justified cause to use some 3rd party library that is not currently listed, candidate can ask Goodwall
              team for approval before doing so.
            </li>
          </ol>
          <RaisedButton
            primary
            containerElement={<Link to="/my-universities" />}
            label="My Universities"
          />
        </WelcomePage>
      </DefaultLayout>
    );
  }
}

IndexLayout.propTypes = {
};

export default IndexLayout;
