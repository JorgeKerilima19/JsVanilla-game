export const arrow = () => {
  const arrowContainer = document.createElement("div");
  Array.from(Array(3)).forEach((el, index) => {
    const arrow = new Image();
    arrow.src = "./assets/arrow.svg";

    arrow.classList.add("arrow-continue", `arrow-${index + 1}`);
    arrowContainer.appendChild(arrow);
  });

  arrowContainer.classList.add("flex");

  return arrowContainer;
};
