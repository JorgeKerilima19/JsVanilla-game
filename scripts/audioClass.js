class playAudio {
  constructor() {
    this.bgSound = new Audio("../tracks/bg-music.mp3");
    this.picksrc = new Audio("../tracks/pickCard.mp3");
    this.wrongsrc = new Audio("../tracks/wrong.mp3");
    this.pairsrc = new Audio("../tracks/pair.mp3");
    this.levelUpSound = new Audio("../tracks/level-up.mp3");
    this.bgSound.volume = 0.6;
  }
  bgMusicStart() {
    this.bgMusicRestart();
    this.bgSound.play();
    this.bgSound.loop = true;
  }
  bgMusicRestart() {
    this.bgSound.currentTime = 0;
  }
  bgMusicPause() {
    this.bgSound.pause();
  }
  bgMusicLevelUp() {
    this.bgMusicPause();
    this.bgMusicRestart();
    this.levelUpSound.play();
  }
  pickSound() {
    this.picksrc.play();
  }
  wrongSound() {
    this.wrongsrc.play();
  }
  pairSound() {
    this.pairsrc.play();
  }
}

const audioPlayer = new playAudio();

export default audioPlayer;
