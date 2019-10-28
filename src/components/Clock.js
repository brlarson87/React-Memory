import React from "react";
import { connect } from "react-redux";

import timeFormat from "../utils/format";

import { timeDecrement } from "../actions/mainActions";

const Clock = ({ timeLeft, playing, timeDecrement }) => {
  if (playing) {
    if (timeLeft === 300) {
      setTimeout(() => {
        timeDecrement();
      }, 5400);
    } else {
      setTimeout(() => {
        timeDecrement();
      }, 1000);
    }
  }

  return (
    <div className='score-board'>
      <div className='score-board__container'>{timeFormat(timeLeft)}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  timeLeft: state.main.time,
  playing: state.main.playing
});

export default connect(
  mapStateToProps,
  { timeDecrement }
)(Clock);
