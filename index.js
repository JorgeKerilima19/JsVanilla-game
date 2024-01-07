import { homePage } from "./scripts/components/index.js";
import navigation from "./scripts/navigation.js";

const mainWrapper = document.querySelector("#root");
const home = homePage();

mainWrapper.appendChild(home);

window.addEventListener("hashchange", navigation);
