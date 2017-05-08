import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ChoicesCard } from 'components/List';
import { chooseUniversity } from 'store/actions/thunks';
import { ACCEPT_UNIVERSITY } from 'store/actions/types';
import * as constants from 'config/constants';
import _throttle from 'lodash/throttle';

class ChoicesCardContainer extends Component {
  static propTypes = {
    university: PropTypes.object.isRequired,
    chooseUniversity: PropTypes.func,
    recentUniversityId: PropTypes.number,
    recentAction: PropTypes.string
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

  /**
    * Throttles TouchMove function
    * @param {function} - Function to be triggered.
    * @param {integer} - Time to wait before the function is triggered again.
    * @returns {void}
    */
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

  /**
   * This decides if the swipe distance is enough to promote swipe.
   * @param {integer} distance - The distance between the start and end of the swipe.
   * @returns {boolean} True if the swipe is far enough.
   */
  _shouldCommitSwipe = (distance) => {
    if (distance > this.threshold || distance < -this.threshold) {
      return true;
    }

    return false;
  }

  /**
   * TouchStart event handler
   * @param {Event} e - Synthetic Event
   * @returns {void}
   */
  touchStart = (e) => {
    this.touchEnded = false;
    const touch = e.changedTouches[0];
    this.startX = touch.pageX;
    this.startY = touch.pageY;
  }

  /**
   * TouchStart event handler
   * @param {Event} e - Synthetic Event
   * @returns {void}
   */
  touchMove = (e) => {
    e.persist();
    this._throttledMove(e);
  }

  /**
   * TouchEnd event handler
   * @returns {void}
   */
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
          }, constants.CARD_COMPLETION_TIME);
        });
      }
    } else {
      this.setState({
        distance: 0
      });
    }
  }

  render() {
    const { university, recentUniversityId, recentAction } = this.props;
    const { swiped, distance } = this.state;

    return (
      <ChoicesCard
        {...(swiped && (this.direction === 'right' ?
          { animationClass: 'swipeRight' } :
          { animationClass: 'swipeLeft' }
        ))}
        {...(!swiped &&
          recentUniversityId === university.id && (
            recentAction === ACCEPT_UNIVERSITY ?
              { animationClass: 'approveCard' } :
              { animationClass: 'rejectCard' }
          )
        )}
        distance={distance}
        university={university}
        onTouchStart={this.touchStart}
        onTouchMove={this.touchMove}
        onTouchEnd={this.touchEnd}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  recentUniversityId: state.universities.recentUniversityId,
  recentAction: state.universities.recentAction
});

const mapActionCreators = {
  chooseUniversity
};

export default connect(mapStateToProps, mapActionCreators)(ChoicesCardContainer);
