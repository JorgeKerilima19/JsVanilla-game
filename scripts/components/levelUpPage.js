export const levelUpPage = () => {
  const container = document.createElement("div");

  const title = document.createElement("h2");
  const startButton = document.createElement("a");

    startButton.href = "#game";
  startButton.innerText = "Continue";

  title.innerText = "Level up Page";
  container.appendChild(title);
  container.appendChild(startButton);

  return container;
};
