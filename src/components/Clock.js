import React from "react";
import { connect } from "react-redux";

import timeFormat from "../utils/format";

import { timeDecrement, openModal, removeCover } from "../actions/mainActions";

const Clock = ({
  timeLeft,
  timeDecrement,
  clockRunning,
  openModal,
  removeCover
}) => {
  if (clockRunning && timeLeft) {
    if (timeLeft === 300) {
      setTimeout(() => {
        timeDecrement();
        removeCover();
      }, 5400);
    } else {
      setTimeout(() => {
        timeDecrement();
      }, 1000);
    }
  }
  if (!timeLeft) {
    openModal();
  }

  return (
    <div className='score-board'>
      <div className='score-board__container'>
        {timeLeft ? (
          timeFormat(timeLeft)
        ) : (
          <h6 className='sm-font'>Time's up</h6>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  timeLeft: state.main.time,
  clockRunning: state.main.clockRunning
});

export default connect(mapStateToProps, {
  timeDecrement,
  openModal,
  removeCover
})(Clock);
