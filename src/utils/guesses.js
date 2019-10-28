import store from "../store";

const guessesArr = () => {
  return store.getState().main.guesses;
};

export default guessesArr;
