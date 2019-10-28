export const addGuess = guess => dispatch => {
  // let front = guess.querySelector(".card__side--front");
  // let back = guess.querySelector(".card__side--back");
  // setTimeout(() => {
  //   front.style.transform = "rotateY(0)";
  //   back.style.transform = "rotateY(-180deg)";
  // }, 1000);

  dispatch({
    type: "GUESS_ADDED",
    payload: guess
  });
};

export const compareGuesses = ga => dispatch => {
  if (ga[0].getAttribute("value") === ga[1].getAttribute("value")) {
    for (let i = 0; i < ga.length; i++) {
      let front = ga[i].querySelector(".card__side--front");
      let back = ga[i].querySelector(".card__side--back");
      setTimeout(() => {
        front.style.opacity = "0";
        back.style.opacity = "0";
      }, 600);
    }
    dispatch({
      type: "CLEAR_GUESSES"
    });
    dispatch({
      type: "FOUND_MATCH"
    });
    console.log("same");
  } else {
    for (let i = 0; i < ga.length; i++) {
      let front = ga[i].querySelector(".card__side--front");
      let back = ga[i].querySelector(".card__side--back");
      setTimeout(() => {
        front.style.transform = "rotateY(0)";
        back.style.transform = "rotateY(-180deg)";
      }, 600);
    }
    dispatch({
      type: "CLEAR_GUESSES"
    });
    console.log("Not same");
  }
};

export const timeDecrement = () => dispatch => {
  dispatch({
    type: "COUNTDOWN"
  });
};

export const startGame = () => dispatch => {
  dispatch({
    type: "START"
  });
};