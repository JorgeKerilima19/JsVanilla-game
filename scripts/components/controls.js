import audioPlayer from "../audioClass.js";

export const controls = () => {
  const container = document.createElement("div");

  const muteContainer = document.createElement("div");
  const muteButton = document.createElement("input");
  const muteLabel = document.createElement("label");
  const muteImg = new Image(25, 25);

  muteButton.type = "checkbox";
  muteButton.id = "mute";
  muteImg.src = "./assets/mute.svg";

  muteLabel.htmlFor = "mute";

  muteButton.addEventListener("change", () => {
    if (muteButton.checked) {
      audioPlayer.bgSound.volume = 0;
      return;
    }
    audioPlayer.bgSound.volume = 0.6;
  });

  muteLabel.appendChild(muteImg);

  muteContainer.appendChild(muteButton);
  muteContainer.appendChild(muteLabel);

  container.appendChild(muteContainer);

  //classes
  muteContainer.classList.add("controls-mute");

  return container;
};
