const toTime = (time) => {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60);

  return { seconds, minutes };
};

export default toTime;
