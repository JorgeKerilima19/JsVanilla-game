import { arrow } from "./arrow.js";

export const levelUpPage = () => {
  const container = document.createElement("div");

  const img = new Image();
  img.src = "./assets/levelUp.png ";

  const continueContainer = document.createElement("a");
  const continueButton = document.createElement("span");

  const arrows = arrow();

  continueContainer.href = "#game";
  continueButton.innerText = "Continue";

  img.classList.add("img-levelUp");
  continueButton.classList.add("button-continue");

  continueContainer.appendChild(continueButton);
  continueContainer.appendChild(arrows);

  continueContainer.classList.add("flex", "container-continue");

  container.appendChild(img);
  container.appendChild(continueContainer);

  return container;
};
