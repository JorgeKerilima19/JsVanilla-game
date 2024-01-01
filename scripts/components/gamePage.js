import newGame from "../gameClass.js";
import { timer } from "./timer.js";

export const gamePage = () => {
  const container = document.createElement("div");

  //draw table for cards
  const table = document.createElement("div");

  table.setAttribute("id", "table");

  const backToMenu = document.createElement("a");
  backToMenu.href = "#";

  backToMenu.innerText = "Go Back";

  table.classList.add("table");

  const button = timer(newGame.minutes);

  //classes

  backToMenu.classList.add("button");
  button.classList.add("time-button");

  container.appendChild(backToMenu);
  container.appendChild(button);
  container.appendChild(table);

  return container;
};
