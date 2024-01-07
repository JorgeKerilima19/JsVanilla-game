import audioPlayer from "../audioClass.js";

export const controls = () => {
  const container = document.createElement("div");

  const muteButton = document.createElement("input");

  muteButton.type = "checkbox";

  muteButton.addEventListener("change", () => {
    if (muteButton.checked) {
      audioPlayer.bgSound.volume = 0;
      return;
    }
    audioPlayer.bgSound.volume = 0.6;
  });

  container.appendChild(muteButton);

  return container;
};
