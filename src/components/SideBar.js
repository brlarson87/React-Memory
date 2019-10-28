import React, { Fragment } from "react";
import { connect } from "react-redux";

import Clock from "./Clock";
import Matches from "./Matches";
import MatchesLeft from "./MatchesLeft";

import { startGame } from "../actions/mainActions";

const SideBar = ({ playing, startGame }) => {
  return (
    <Fragment>
      {!playing ? (
        <div className='side-bar'>
          <button className='btn-play' onClick={startGame}>
            Play
          </button>
        </div>
      ) : (
        <div className='side-bar'>
          <div className='side-bar__heading'>
            <h2 className='title'>Matches</h2>
          </div>
          <Matches />
          <div className='side-bar__heading'>
            <h2 className='title'>Left</h2>
          </div>
          <MatchesLeft />
          <div className='side-bar__heading'>
            <h2 className='title'>time</h2>
          </div>
          <Clock />
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  matches: state.main.matches,
  matchesLeft: state.main.matchesLeft,
  playing: state.main.playing,
  guesses: state.main.guesses
});

export default connect(
  mapStateToProps,
  { startGame }
)(SideBar);
