export const gameOver = () => {
  const container = document.createElement("div");

  const backToMeny = document.createElement("a");
  backToMeny.href = "#";

  backToMeny.innerText = "GoMenu";

  container.appendChild(backToMeny);

  return container;
};
