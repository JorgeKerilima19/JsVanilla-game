export const gamePage = () => {
  const container = document.createElement("div");

  const backToMeny = document.createElement("a");
  backToMeny.href = "#";

  backToMeny.innerText = "Go Back";

  container.appendChild(backToMeny);

  return container;
};
