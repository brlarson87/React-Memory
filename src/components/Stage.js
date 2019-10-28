import React, { Fragment } from "react";
import { connect } from "react-redux";

import shuffle from "../utils/shuffle";

import { addGuess } from "../actions/mainActions";
import { compareGuesses } from "../actions/mainActions";

import Card from "./Card";

const Stage = ({ cards, addGuess, playing, compareGuesses }) => {
  return (
    <Fragment>
      {playing ? (
        <div className='stage-container'>
          {cards.map((card, index) => (
            <Card
              number={index}
              imagePath={card.img}
              key={index}
              val={card.value}
              addGuess={addGuess}
              compareGuesses={compareGuesses}
            />
          ))}
        </div>
      ) : (
        <div className='stage-container'>
          <div className='start-game-text'>Press Play To Start</div>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  cards: shuffle(state.main.cards),
  playing: state.main.playing
});

export default connect(
  mapStateToProps,
  { addGuess, compareGuesses }
)(Stage);
