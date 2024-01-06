class playAudio {
  constructor() {
    this.bgSound = new Audio("../tracks/bg-music.mp3");
    this.picksrc = new Audio("../tracks/pickCard.mp3");
    this.wrongsrc = new Audio("../tracks/wrong.mp3");
    this.pairsrc = new Audio("../tracks/pair.mp3");
  }
  bgMusicStart() {
    this.bgSound.play();
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
