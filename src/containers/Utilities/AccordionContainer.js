import React, { Component, PropTypes } from 'react';
import { Accordion } from 'components/Utilities';

class AccordionContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  // The value that will determine if this component will display
  //  the Expand/Collapse button.
  static maxHeight = 68;

  constructor() {
    super();

    this.state = {
      expand: false,
      showExpand: false
    };
  }

  componentDidMount() {
    if (this.container.clientHeight > this.constructor.maxHeight) {
      this.setState({
        showExpand: true
      });
    }
  }

  toggleExpand = () => {
    this.setState({
      expand: !this.state.expand
    });
  }

  bindContainer = (container) => this.container = container;

  render() {
    const { children } = this.props;
    const { expand, showExpand } = this.state;

    return (
      <Accordion
        bindContainer={this.bindContainer}
        showExpand={showExpand}
        expand={expand}
        children={children}
        toggleExpand={this.toggleExpand}
      />
    );
  }
}

export default AccordionContainer;
