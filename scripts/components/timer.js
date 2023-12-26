import newGame from "../gameClass.js";

export const timer = () => {
  const container = document.createElement("div");
  const minuteHand = document.createElement("span");
  const secondsHand = document.createElement("span");

  function updateTime() {
    minuteHand.innerText = newGame.getPassTime();
  }

  //   secondsHand.innerText = seconds;
  setInterval(updateTime, 1000);

  container.appendChild(minuteHand);
  container.appendChild(secondsHand);

  return container;
};
