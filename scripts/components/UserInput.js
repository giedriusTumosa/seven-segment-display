import { screen, userInput } from "../main.js";

export default class UserInput {
  constructor() {
    this.inputTouched = false;
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
    this.inputText.setAttribute("maxlength", "1");

    this.label = document.createElement("label");
    this.label.setAttribute("for", "userInput");
    this.labelText = document.createTextNode("Input (one digit only): ");
    this.label.append(this.labelText);

    this.errorMessage = document.createElement("p");
    this.errorMessage.setAttribute("class", "inputErrorMessage");

    this.textInputWrapper.append(this.label, this.inputText, this.errorMessage);

    // Event listeners

    this.inputText.addEventListener("input", (e) => {
      screen.input = e.target.value;
    });
    this.inputText.addEventListener("focus", (e) => {
      this.inputTouched = true;
    });

    return this.form;
  }
}
