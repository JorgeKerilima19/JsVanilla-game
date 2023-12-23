const itemCard = (backContent) => {
  const container = document.createElement("article");

  const cardFront = document.createElement("div");
  const cardBack = document.createElement("div");

  //classes

  container.classList.add("card-container");
  cardFront.classList.add("card-front");
  cardBack.classList.add("card-back");

  cardBack.innerText = backContent;

  container.appendChild(cardFront);
  container.appendChild(cardBack);

  container.addEventListener("click", () => {
    container.classList.toggle("forwards");
  });

  return container;
};

export default itemCard;
