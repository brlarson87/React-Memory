import React from "react";
import { connect } from "react-redux";

import finalScore from "../utils/finalScore";

const EndModal = ({ modalStatus, timeLeft, matches }) => {
  return (
    <div
      className='end-modal'
      style={{
        visibility: `${modalStatus}`
      }}
    >
      <div
        className='end-modal__content'
        style={{ animation: "zoomIn 1.5s linear" }}
      >
        <h2 className='end-modal__title'>
          <span>Your Score:&nbsp;</span>
          {finalScore(timeLeft, matches)}
        </h2>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  modalStatus: state.main.modal,
  timeLeft: state.main.time,
  matches: state.main.matches
});

export default connect(mapStateToProps)(EndModal);
