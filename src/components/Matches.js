import React from "react";
import { connect } from "react-redux";

import { stopClock, openModal } from "../actions/mainActions";

const Matches = ({ matches, stopClock, openModal }) => {
  if (matches === 26) {
    stopClock();
    openModal();
  }

  return (
    <div className='score-board'>
      <div className='score-board__container'>{matches}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  matches: state.main.matches
});

export default connect(
  mapStateToProps,
  { stopClock, openModal }
)(Matches);
