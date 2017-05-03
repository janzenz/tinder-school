import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ChoicesCard } from 'components/List';
import { chooseUniversity } from 'store/actions/thunks';
import _throttle from 'lodash/throttle';

class ChoicesCardContainer extends Component {
  static propTypes = {
    university: PropTypes.object.isRequired,
    chooseUniversity: PropTypes.func
  }

  constructor() {
    super();

    this.threshold = 90;
    this.startX = 0;
    this.startY = 0;
    this.direction = false;
    this.touchEnded = false;

    this.state = {
      swiped: false,
      distance: 0
    };
  }

  _throttledMove = _throttle((e) => {
    const touch = e.changedTouches[0];
    const distance = touch.pageX - this.startX;
    this.direction = (distance < 0)? 'left' : 'right';
    if (!this.touchEnded) {
      this.setState({
        distance
      });
    }
  }, 100)

  _shouldCommitSwipe = (distance) => {
    if (distance > this.threshold || distance < -this.threshold) {
      return true;
    }

    this.setState({
      distance: 0
    });
    return false;
  }

  touchStart = (e) => {
    this.touchEnded = false;
    const touch = e.changedTouches[0];
    this.startX = touch.pageX;
    this.startY = touch.pageY;
  }

  touchMove = (e) => {
    e.persist();
    this._throttledMove(e);
  }

  touchEnd = () => {
    const { distance } = this.state;
    const { chooseUniversity } = this.props;
    this.touchEnded = true;

    if (this._shouldCommitSwipe(distance)) {
      if (this.direction !== false) {
        this.setState({
          swiped: true,
          distance: 0
        }, () => {
          setTimeout(() => {
            if (this.direction === 'right') {
              chooseUniversity(true);
            } else {
              chooseUniversity(false);
            }
          }, 1500);
        });
      }
    }
  }

  render() {
    const { university } = this.props;
    const { swiped, distance } = this.state;

    return (
      <ChoicesCard
        {...(swiped && (this.direction === 'right' ?
          { animationClass: 'swipeRight' } :
          { animationClass: 'swipeLeft' }
        ))}
        distance={distance}
        university={university}
        onTouchStart={this.touchStart}
        onTouchMove={this.touchMove}
        onTouchEnd={this.touchEnd}
      />
    );
  }
}

const mapActionCreators = {
  chooseUniversity
};

export default connect(null, mapActionCreators)(ChoicesCardContainer);
