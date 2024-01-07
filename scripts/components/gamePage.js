import newGame from "../gameClass.js";
import { controls } from "./controls.js";
import { timer } from "./timer.js";

export const gamePage = () => {
  const container = document.createElement("div");

  const upperContainer = document.createElement("div");

  const backToMenu = document.createElement("a");
  backToMenu.href = "#";

  backToMenu.innerText = "Go Back";

  //controls
  const panel = controls();

  const button = timer(newGame.minutes);

  //draw table for cards
  const table = document.createElement("div");

  table.setAttribute("id", "table");

  //classes

  upperContainer.classList.add("controls-container");
  backToMenu.classList.add("button");
  button.classList.add("time-button");
  table.classList.add("table");

  upperContainer.appendChild(backToMenu);
  upperContainer.appendChild(panel);
  upperContainer.appendChild(button);

  container.appendChild(upperContainer);
  container.appendChild(table);

  return container;
};
