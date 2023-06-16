import Display, { Char } from "./Display";

export default class Screen {
  numberOfDisplays: number;
  displays: Display[];
  _input: string;
  screenError: string;
  screen: HTMLElement | undefined;

  constructor(numberOfDisplays = 1) {
    this.numberOfDisplays = numberOfDisplays;
    this.displays = this.#fillDisplaysArray();

    this._input = "";
    this.screenError = "";
  }
  set input(userInput: string) {
    this._input = userInput;
    this.render();
  }

  render() {
    const screenElement = document.querySelector(".screen");
    screenElement && screenElement.remove();

    this.screen = document.createElement("div");
    this.screen.setAttribute("class", "screen");

    // Reset displays
    this.displays.forEach((display) => (display.charToDisplay = " "));

    this._input.split("").forEach((char, index) => {
      this.displays[index].charToDisplay = char as Char;
    });

    this.displays.forEach((display) => this.screen!.append(display.render()));

    const app = document.querySelector("#app");
    app!.append(this.screen);

    return this.screen;
  }

  // #noSegmentCodeHandler(segmentCode, charToSearch) {
  //   !segmentCode &&
  //     this._input !== "" &&
  //     userInput.inputTouched &&
  //     (userInput.errorMessage.textContent = `Symbol \"${charToSearch}\" cannot be displayed.`);

  //   !segmentCode &&
  //     this._input === "" &&
  //     (userInput.errorMessage.textContent = "");
  // }
  #fillDisplaysArray(): Display[] {
    const displays: Display[] = [];
    for (let i = 0; i < this.numberOfDisplays; i++) {
      displays.push(new Display());
    }
    return displays;
  }
}
