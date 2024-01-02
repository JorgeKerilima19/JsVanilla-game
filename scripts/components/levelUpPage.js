import newGame from "../gameClass.js";
import toTime from "../helpers/toTime.js";
import { arrow } from "./arrow.js";

export const levelUpPage = () => {
  const container = document.createElement("div");

  //Left container

  const leftContainer = document.createElement("div");

  const img = new Image();
  img.src = "./assets/levelUp.png ";

  const timeSpent = document.createElement("span");

  const { minutes, seconds } = toTime(newGame.getPassTime());

  timeSpent.innerText = `You spent ${minutes} minutes and ${seconds} seconds on the last try`;

  leftContainer.appendChild(img);
  leftContainer.appendChild(timeSpent);

  //Right container

  const rightContainer = document.createElement("a");
  const continueButton = document.createElement("span");

  const arrows = arrow();

  rightContainer.href = "#game";
  continueButton.innerText = "Continue";

  img.classList.add("img-levelUp");
  continueButton.classList.add("button-continue");

  rightContainer.appendChild(continueButton);
  rightContainer.appendChild(arrows);

  rightContainer.classList.add("flex", "container-continue");

  container.appendChild(leftContainer);
  container.appendChild(rightContainer);

  return container;
};
