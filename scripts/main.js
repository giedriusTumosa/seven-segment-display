import Screen from "./components/Screen.js";
import UserInput from "./components/UserInput.js";

const app = document.querySelector("#app");
const screen = new Screen();
const userInput = new UserInput();

app.append(userInput.render(), screen.render());

export { screen, userInput };
