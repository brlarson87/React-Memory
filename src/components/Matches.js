import React from "react";
import { connect } from "react-redux";

const Matches = ({ matches }) => {
  return (
    <div className='score-board'>
      <div className='score-board__container'>{matches}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  matches: state.main.matches
});

export default connect(mapStateToProps)(Matches);
