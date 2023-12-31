export const homePageCard = (index = 0) => {
  const container = document.createElement("div");

  const img = new Image();

  img.src = `./assets/emoji${index}.png`;

  container.appendChild(img);

  container.classList.add("homepage-card", `homepage-card-${index}`);

  return container;
};
