import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ChoicesCard } from 'components/List';
import { chooseUniversity } from 'store/actions/thunks';

class ChoicesCardContainer extends Component {
  static propTypes = {
    university: PropTypes.object.isRequired,
    chooseUniversity: PropTypes.func
  }

  constructor() {
    super();

    this.startX = 0;
    this.startY = 0;
    this.direction = false;

    this.state = {
      swiped: false
    };
  }

  _start = (e) => {
    const touch = e.changedTouches[0];
    this.startX = touch.pageX;
    this.startY = touch.pageY;
  }

  _move = (e) => {
    const touch = e.changedTouches[0];
    const distX = touch.pageX - this.startX; // get horizontal dist traveled by finger while in contact with surface
    const distY = touch.pageY - this.startY; // get vertical dist traveled by finger while in contact with surface
    if (Math.abs(distX) > Math.abs(distY)){ // if distance traveled horizontally is greater than vertically, consider this a horizontal movement
        this.direction = (distX < 0)? 'left' : 'right';
    } else { // else consider this a vertical movement
        this.direction = (distY < 0)? 'up' : 'down';
    }
  }

  _end = (e) => {
    const { chooseUniversity } = this.props;

    if (this.direction !== false) {
      this.setState({
        swiped: true
      }, () => {
        setTimeout(() => {
          if (this.direction === 'right') {
            chooseUniversity(true);
          } else {
            chooseUniversity(false);
          }
        }, 500);
      });
    }
  }

  render() {
    const { university } = this.props;
    const { swiped } = this.state;

    return (
      <ChoicesCard
        {...(swiped && (this.direction === 'right' ? { animationClass: 'swipeRight' } : { animationClass: 'swipeLeft' }))}
        ref={card => this.card = card}
        university={university}
        onTouchStart={this._start}
        onTouchMove={this._move}
        onTouchEnd={this._end}
      />
    );
  }
}

const mapActionCreators = {
  chooseUniversity
};

export default connect(null, mapActionCreators)(ChoicesCardContainer);
