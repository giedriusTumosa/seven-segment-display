import Display from "./Display.js";
import { segmentCodeSearch } from "../charLibrary.js";
import { userInput } from "../main.js";

export default class Screen {
  constructor(numberOfDisplays = 10) {
    this.numberOfDisplays = numberOfDisplays;
    this.displays = this.#fillDisplaysArray();
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

    // Reset displays
    this.displays.forEach((display) => (display.segmentCode = ""));

    // this._input.split("").forEach((char, index) => {
    //   const segmentCode = segmentCodeSearch(char);
    //   this.#noSegmentCodeHandler(segmentCode);
    //   this.displays[index + indexShift].segmentCode = segmentCode;
    // });

    console.log(this.#generateSegmentCodeArray());

    this.#generateSegmentCodeArray().forEach((segmentCode, index) => {
      this.displays[index].segmentCode = segmentCode;
    });

    this.displays.forEach((display) => this.screen.append(display.render()));

    const app = document.querySelector("#app");
    app.append(this.screen);

    return this.screen;
  }

  #noSegmentCodeHandler(segmentCode, charToSearch) {
    !segmentCode &&
      this._input !== "" &&
      userInput.inputTouched &&
      (userInput.errorMessage.textContent = `Symbol \"${charToSearch}\" cannot be displayed.`);

    !segmentCode &&
      this._input === "" &&
      (userInput.errorMessage.textContent = "");
  }
  #fillDisplaysArray() {
    const displays = [];
    for (let i = 0; i < this.numberOfDisplays; i++) {
      displays.push(new Display());
    }
    return displays;
  }
  #generateSegmentCodeArray() {
    return this._input
      .split("")
      .map((char, index, charArray) => {
        const segmentCode = segmentCodeSearch(char);
        this.#noSegmentCodeHandler(segmentCode, char);
        if (
          char !== "." &&
          charArray[index + 1] &&
          charArray[index + 1] === "."
        ) {
          return segmentCode + segmentCodeSearch(charArray[index + 1]);
        }

        if (
          char === "." &&
          charArray[index - 1] &&
          charArray[index - 1] !== "."
        ) {
          return undefined;
        }

        return segmentCode;
      })
      .filter((segmentCode) => segmentCode);
  }
}
