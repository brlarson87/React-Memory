import React from "react";
import { connect } from "react-redux";

const MatchesLeft = ({ matchesLeft }) => {
  return (
    <div className='score-board'>
      <div className='score-board__container'>{matchesLeft}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  matchesLeft: state.main.matchesLeft
});

export default connect(mapStateToProps)(MatchesLeft);
