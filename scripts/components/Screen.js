import Display from "./Display.js";
import { segmentCodeSearch } from "../charLibrary.js";
import { userInput } from "../main.js";

export default class Screen {
  constructor() {
    this.display = new Display();
    this._input = "";
    this.screenError = "";
  }
  set input(userInput) {
    this._input = userInput;
    this.render();
  }

  render() {
    const screenElement = document.querySelector(".screen");
    screenElement && screenElement.remove();

    this.screen = document.createElement("div");
    this.screen.setAttribute("class", "screen");

    const segmentCode = segmentCodeSearch(this._input);
    this.noSegmentCodeHandler(segmentCode);

    this.display.segmentCode = segmentCode;

    this.screen.append(this.display.render());

    const app = document.querySelector("#app");
    app.append(this.screen);

    return this.screen;
  }

  noSegmentCodeHandler(segmentCode) {
    !segmentCode &&
      this._input !== "" &&
      userInput.inputTouched &&
      (userInput.errorMessage.textContent =
        "This symbol cannot be displayed yet.");

    !segmentCode &&
      this._input === "" &&
      (userInput.errorMessage.textContent = "");
  }
}
