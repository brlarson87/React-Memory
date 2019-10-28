import React from "react";

import guessesArr from "../utils/guesses";

const Card = props => {
  const guessAdded = guess => {
    props.addGuess(guess);
    let ga = guessesArr();
    if (ga.length > 1) {
      props.compareGuesses(ga);
    }
  };

  const flipCard = e => {
    e.persist();

    let front = e.currentTarget.querySelector(".card__side--front");
    let back = e.currentTarget.querySelector(".card__side--back");

    front.style.transform = "rotateY(-180deg)";
    back.style.transform = "rotateY(0)";

    guessAdded(e.currentTarget);
  };

  return (
    <div
      className={`card card-${props.number + 1}`}
      value={props.val}
      onClick={e => flipCard(e)}
    >
      <div className='card__side card__side--front'>
        <img
          src='http://res.freestockphotos.biz/pictures/15/15541-illustration-of-a-card-deck-back-pv.png'
          alt='card-back'
        />
      </div>
      <div className='card__side card__side--back'>
        <img src={props.imagePath} alt='card-back' />
      </div>
    </div>
  );
};

export default Card;
