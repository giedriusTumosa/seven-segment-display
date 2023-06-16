import Screen from "./components/Screen";
import UserInput from "./components/UserInput";

const app = document.querySelector("#app");
const screen = new Screen(4);
const userInput = new UserInput();

app?.append(userInput.render(), screen.render());

export { screen, userInput };
