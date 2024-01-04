import newGame from "../gameClass.js";
import toTime from "../helpers/toTime.js";

export const recordsComponent = () => {
  const container = document.createElement("div");

  const text = document.createElement("span");

  const level = newGame.level - 1;
  const levelsRecord = newGame.getRecords();

  const { seconds, minutes } = toTime(levelsRecord[`level-${level}`]);

  if (`level-${level}` in levelsRecord) {
    text.innerText = `Your previous record for this level is ${seconds} seconds and ${minutes} minutes`;
  }

  container.appendChild(text);

  return container;
};
