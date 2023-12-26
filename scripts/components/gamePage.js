import newGame from "../gameClass.js";

export const gamePage = () => {
  const container = document.createElement("div");

  //draw table for cards
  const table = document.createElement("div");

  table.setAttribute("id", "table");

  const backToMenu = document.createElement("a");
  backToMenu.href = "#";

  backToMenu.innerText = "Go Back";

  //classes

  table.classList.add("table");

  const button = document.createElement("button");
  button.innerText = "CLick Me";

  button.addEventListener("click", () => {
    newGame.stopTime();
  });

  container.appendChild(table);
  container.appendChild(backToMenu);
  container.appendChild(button);

  return container;
};
