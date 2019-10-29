const finalScore = (time, matches) => {
  if (time === 0) return matches;

  return Math.round(time * matches);
};

export default finalScore;
