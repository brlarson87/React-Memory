const timeFormat = time => {
  if (time < 10) {
    return `0:0${time}`;
  }
  if (time < 60) {
    return `0:${time}`;
  }
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    return `${minutes}:0${seconds}`;
  }

  return `${minutes}:${seconds}`;
};

export default timeFormat;
