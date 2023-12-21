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

  container.appendChild(table);
  container.appendChild(backToMenu);

  return container;
};
