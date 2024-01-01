import newGame from "../gameClass.js";

let index = 0;

const itemCard = (backContent) => {
  const container = document.createElement("article");

  const cardFront = document.createElement("div");
  const cardBack = document.createElement("div");

  //classes

  container.classList.add(
    "card-container",
    `${index % 2 === 0 ? "even" : "odd"}`
  );
  cardFront.classList.add("card-front");
  cardBack.classList.add("card-back");

  cardBack.innerText = backContent;

  container.appendChild(cardFront);
  container.appendChild(cardBack);

  container.addEventListener("click", () => {
    if (newGame.pairToCompare.includes(container)) {
      return;
    }
    newGame.compareCards(container);
  });

  index++;

  return container;
};

export default itemCard;
