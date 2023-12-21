import itemCard from "./components/itemCard.js";
const itemArray = [
  ["💖", "🌹"],
  ["😎", "🎶"],
  ["👀", "😁"],
  ["🎈", "🧶"],
  ["🎃", "👑"],
];

const newArray = itemArray.concat(itemArray);

class game {
  constructor(level = 0) {
    this.level = level;
  }

  drawTable() {
    //get the table to draw on

    this.table = document.getElementById("table");

    itemArray.flat().forEach((el) => {
      const item = itemCard(el);

      this.table.appendChild(item);
    });
  }
}

const newGame = new game();

export default newGame;
