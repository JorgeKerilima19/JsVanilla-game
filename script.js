const emojiArray = ["💖", "🌹"];
const contentToLoad = emojiArray.concat(emojiArray);

class memoryGame {
  constructor(array, totalTime,actualLevel) {
    this.array = array;
    this.rightPairCollection=Array();
    this.totalMoves = 0;
    this.movesController = document.querySelector(".moves");
    this.totalTime = totalTime;
    this.totalMinutes = document.querySelector(".minutes");
    this.totalSeconds = document.querySelector(".seconds");
    this.level=actualLevel;
    this.pairOfCards = [];
    this.result = document.querySelector(".result h4");
  }
  startGame() {
    this.totalMoves = 0;
    this.movesController.innerText = 0;
    document.querySelector(".minutes").innerText = "00";
    document.querySelector(".seconds").innerText = "00";
    this.displayTable();
    this.startCount = this.startCounting();
    this.rightPairCollection=[];
  }
  displayTable() {
    const $table = document.querySelector("#table");
    $table.textContent = "";
    let newArray = this.shuffleCards(this.array);
    newArray.forEach((element) => {
      let card = document.createElement("div");
      let cardContent = document.createElement("div");
      cardContent.textContent = element;
      card.classList.add("card");
      card.dataset.content = element;
      cardContent.classList.add("card-content");
      $table.appendChild(card);
      card.appendChild(cardContent);
    });
  }
  shuffleCards() {
    let result = this.array.sort(function () {
      return Math.random() - 0.5;
    });
    return result;
  }
  flipCards(card) {
    if (!this.pairOfCards.includes(card)) {
      this.pairOfCards.push(card);
      this.totalMoves++;
      this.movesController.innerText = this.totalMoves;
    }
    const pairCards = document.querySelectorAll(".frontwards:not(.right-pair)");
    if (pairCards.length > 1) {
      return;
    }
    card.classList.add("frontwards");
    this.comparingCards(this.pairOfCards[0], this.pairOfCards[1]);
  }
  getDataContent(card) {
    return card.dataset.content;
  }
  comparingCards(card1, card2) {
    if (this.pairOfCards.length === 2) {
      if (this.getDataContent(card1) === this.getDataContent(card2)) {
        this.rightPair(card1, card2);
        setTimeout(() => {
          this.result.innerText = "Let's try another card :D";
        }, 1500);
      } else {
        this.wrongPair(card1, card2);
        this.result.innerText = "You missed it :'D";
      }
      this.pairOfCards = [];
    }
    return;
  }
  rightPair(card1, card2) {
    card1.classList.add("right-pair");
    card2.classList.add("right-pair");
    this.rightPairCollection.push(card1);
    this.rightPairCollection.push(card2);
    this.result.innerText = "Right Pair! :D";
    if(this.array.length===this.rightPairCollection.length){
      this.victory()
    }
  }
  wrongPair(card1, card2) {
    setTimeout(() => {
      card1.classList.remove("frontwards");
      card2.classList.remove("frontwards");
      this.result.innerText = "Let's try again :D";
    }, 1000);
  }
  startCounting() {
    this.totalSeconds = this.totalTime % 60;
    this.totalMinutes = Math.floor((this.totalTime / 60) % 60);
    return setInterval(() => {
      this.totalSeconds--;
      if (this.totalSeconds < 0) {
        this.totalSeconds = 59;
        this.totalMinutes--;
      }
      if (this.totalMinutes < 0) {
        this.totalSeconds = 0;
        this.totalMinutes = 0;
        clearInterval(this.startCount);
      }
      let secondsInText = this.totalSeconds;
      let minutesInText = this.totalMinutes;
      this.totalSeconds < 10
        ? (secondsInText = "0" + this.totalSeconds)
        : false;
      this.totalMinutes < 10
        ? (minutesInText = "0" + this.totalMinutes)
        : false;
      document.querySelector(".seconds").innerText = secondsInText;
      document.querySelector(".minutes").innerText = minutesInText;
    }, 1000);
  }
  stopCount() {
    clearInterval(this.startCount);
  }
  hideCards(){
    this.rightPairCollection.forEach(element => {
      element.classList.remove("frontwards");
      element.classList.remove("right-pair");
    });
  }
  victory(){
    this.stopCount();
    setTimeout(() => {
      document.querySelector(".screen-update-level").classList.remove("invisible");
      this.hideCards();
    }, 500);
  }
}

class levels{
  constructor(levelArray){
    this.array=levelArray
  }
  updateLevel(){
    this.array=this.array.concat(":D")
  }

}
const level= new levels(contentToLoad);
console.log(level)
level.updateLevel()
console.log(level)

function gameReady() {
  const mainSite = document.querySelector(".screen-welcome");
  newGame.startGame();
  document.querySelector("#button-start").addEventListener("click", () => {
    mainSite.classList.add("invisible");
  });
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      newGame.flipCards(card);
    });
  });
}
const newGame = new memoryGame(contentToLoad, 5);
const resetButton = document.querySelectorAll(".button");
resetButton.forEach((button) => {
  button.addEventListener("click", () => {
    newGame.stopCount();
    gameReady();
  });
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", gameReady());
} else {
  gameReady();
}
