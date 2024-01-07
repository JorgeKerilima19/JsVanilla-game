import {
  gamePage,
  homePage,
  gameOver,
  levelUpPage,
} from "./components/index.js";
import newGame from "./gameClass.js";

const navigation = () => {
  const hash = window.location.hash.substring(1);
  const mainWrapper = document.getElementById("root");

  // Render mainWrapper based on the hash fragment
  switch (hash) {
    case "":
      const root = homePage();
      mainWrapper.innerHTML = "";
      mainWrapper.appendChild(root);
      newGame.clear();
      newGame.time = 0;
      break;
    case "game":
      newGame.clear();
      newGame.time = 0;
      const game = gamePage();
      mainWrapper.innerHTML = "";
      mainWrapper.appendChild(game);
      newGame.startGame();

      break;
    case "levelUp":
      const levelUp = levelUpPage();
      mainWrapper.innerHTML = "";
      mainWrapper.appendChild(levelUp);
      break;

    case "gameover":
      const gameover = gameOver();
      mainWrapper.innerHTML = "";
      mainWrapper.appendChild(gameover);
      break;
    default:
      const home = homePage();
      mainWrapper.innerHTML = "";
      mainWrapper.appendChild(home);
  }
};

export default navigation;
