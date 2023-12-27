import newGame from "../gameClass.js";

export const timer = () => {
  const container = document.createElement("div");
  const minuteHand = document.createElement("span");
  const secondsHand = document.createElement("span");
  const separator = document.createElement("span");

  let minutes = 0;
  let seconds = 0;

  minuteHand.innerText = "00";
  separator.innerText = ":";
  secondsHand.innerText = "00";

  function updateTime() {
    const time = newGame.getPassTime();

    if (time > 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes < 10) {
      minuteHand.innerText = `0${minutes}`;
    }
    if (seconds < 10) {
      secondsHand.innerText = `0${seconds}`;
    } else {
      secondsHand.innerText = seconds;
    }
    seconds++;
  }

  setInterval(updateTime, 1000);

  container.appendChild(minuteHand);
  container.appendChild(separator);
  container.appendChild(secondsHand);

  return container;
};
