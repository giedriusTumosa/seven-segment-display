import { screen, userInput } from "../main.js";

export default class UserInput {
  inputTouched: boolean;
  inputMaxLength: number;
  form: HTMLFormElement;
  textInputWrapper: HTMLElement;
  inputText: HTMLInputElement;
  label: HTMLLabelElement;
  labelText: Text;
  errorMessage: HTMLElement;

  constructor() {
    this.inputTouched = false;
    this.inputMaxLength = screen.displays.length;
  }
  render() {
    this.form = document.createElement("form");
    this.form.setAttribute("class", "userInputForm");

    this.textInputWrapper = document.createElement("div");
    this.textInputWrapper.setAttribute("class", "textInputWrapper");

    this.form.append(this.textInputWrapper);

    this.inputText = document.createElement("input");
    this.inputText.setAttribute("type", "text");
    this.inputText.setAttribute("id", "userInput");
    this.inputText.setAttribute("name", "userInput");
    this.inputText.setAttribute("maxlength", this.inputMaxLength.toString());

    this.label = document.createElement("label");
    this.label.setAttribute("for", "userInput");
    this.labelText = document.createTextNode("Input (one digit only): ");
    this.label.append(this.labelText);

    this.errorMessage = document.createElement("p");
    this.errorMessage.setAttribute("class", "inputErrorMessage");

    this.textInputWrapper.append(this.label, this.inputText, this.errorMessage);

    // Event listeners

    this.inputText.addEventListener("keydown", (e) => {
      const oneDotAlreadyDisplayed =
        this.inputText.value.split("").filter((char) => char === ".").length >=
        1;

      e.key === "." && oneDotAlreadyDisplayed && e.preventDefault();
    });

    this.inputText.addEventListener("input", (e) => {
      screen.input = (e.target as HTMLInputElement).value;
    });
    this.inputText.addEventListener("focus", (e) => {
      this.inputTouched = true;
    });

    return this.form;
  }
}
