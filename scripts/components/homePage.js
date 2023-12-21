export const homePage = () => {
  const container = document.createElement("div");

  const title = document.createElement("h2");
  const startButton = document.createElement("a");

  startButton.href = "#game";
  startButton.innerText = "Start Game";

  title.innerText = "HomePage";
  container.appendChild(title);
  container.appendChild(startButton);

  return container;
};
