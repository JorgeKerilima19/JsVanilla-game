import itemCard from "./components/itemCard.js";
const itemArray = [
  ["💖", "🌹"],
  ["😎", "🎶"],
  ["👀", "😁"],
  ["🎈", "🧶"],
  ["🎃", "👑"],
];

class game {
  constructor(level = 1) {
    this.level = level;
    this.startArray = [];
    this.pairToCompare = [];
  }

  drawTable() {
    //get the table to draw on
    this.updateLevel();

    this.table = document.getElementById("table");

    //draw the card item
    this.startArray.flat().forEach((el) => {
      const item = itemCard(el);

      this.table.appendChild(item);
    });
  }
  updateLevel() {
    //generate new array for each level

    const newArray = itemArray.slice(0, this.level);
    this.startArray = newArray.concat(newArray);
  }
  startGame() {
    this.drawTable();
  }
  rightPair(card1, card2) {
    //add blocking events class

    setTimeout(() => {
      card1.classList.add("right-pair");
      card2.classList.add("right-pair");
    }, 500);
    this.pairToCompare = [];

    return;
  }
  wrongPair(card1, card2) {
    //flip back the card and clean the array to compare

    setTimeout(() => {
      card1.classList.remove("forwards");
      card2.classList.remove("forwards");
    }, 500);
    this.pairToCompare = [];
    return;
  }
  compareCards(card) {
    //get cards
    this.pairToCompare.push(card);

    card.classList.add("forwards");

    //block if there is more than 2 items selected
    if (this.pairToCompare.length === 2) {
      //extracting and comparing cards content

      const card1 = this.pairToCompare[0].childNodes[1].innerText;
      const card2 = this.pairToCompare[1].childNodes[1].innerText;

      card1 === card2
        ? this.rightPair(this.pairToCompare[0], this.pairToCompare[1])
        : this.wrongPair(this.pairToCompare[0], this.pairToCompare[1]);
    }
    return;
  }
}

const newGame = new game();

export default newGame;