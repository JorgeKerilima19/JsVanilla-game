const itemCard = (frontContent) => {
  const container = document.createElement("article");

  const cardFront = document.createElement("div");
  const cardBack = document.createElement("div");

  //classes

  cardFront.classList.add("card-container");

  cardFront.innerText = frontContent;

  container.appendChild(cardFront);
  container.appendChild(cardBack);

  return container;
};

export default itemCard;
