import React from "react";

const ScoreBoard = props => {
  return (
    <div className='score-board'>
      <div className='score-board__container'>{props.content}</div>
    </div>
  );
};

export default ScoreBoard;
