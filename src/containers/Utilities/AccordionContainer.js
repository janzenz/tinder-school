import React, { Component, PropTypes } from 'react';
import { Accordion } from 'components/Utilities';

class AccordionContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  constructor() {
    super();

    this.state = {
      expand: false
    };
  }

  toggleExpand = () => {
    this.setState({
      expand: !this.state.expand
    });
  }

  render() {
    const { children } = this.props;
    const { expand } = this.state;

    return (
      <Accordion
        expand={expand}
        children={children}
        toggleExpand={this.toggleExpand}
      />
    );
  }
}

export default AccordionContainer;
