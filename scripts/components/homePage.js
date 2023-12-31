import { homePageCard } from "./homepageCard.js";

export const homePage = () => {
  const container = document.createElement("div");
  const logoContainer = document.createElement("div");
  const cardsContainer = document.createElement("div");

  //logo + left container
  const logo = new Image();
  logo.src = "./assets/logo.png";

  const text = document.createElement("p");

  text.innerText =
    "Are you capable to get the correct pair before the time goes down?";

  const startButton = document.createElement("a");
  startButton.href = "#game";
  startButton.innerText = "Start Game";

  logoContainer.appendChild(logo);
  logoContainer.appendChild(text);
  logoContainer.appendChild(startButton);

  //cards + right container

  Array.from(Array(3)).forEach((card, index) => {
    const newCard = homePageCard(index + 1);
    cardsContainer.appendChild(newCard);
  });

  //classes

  logoContainer.classList.add("logo-container");
  cardsContainer.classList.add("cards-container");

  startButton.classList.add("button");
  container.appendChild(logoContainer);
  container.appendChild(cardsContainer);

  return container;
};
