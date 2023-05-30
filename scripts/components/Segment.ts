export default class Segment {
  segmentName: string;
  isOn: boolean;
  segment: HTMLElement;
  textHolder: HTMLElement;

  constructor(segmentName) {
    this.segmentName = segmentName;
    this.isOn = false;
  }
  switchOn(): void {
    this.isOn = true;
    this.render();
  }
  switchOff(): void {
    this.isOn = false;
    this.render();
  }
  get state(): boolean {
    return this.isOn;
  }

  render(): HTMLElement {
    this.segment = document.createElement("div");
    this.segment.setAttribute("class", "segment");
    this.segment.classList.add(`${!this.isOn ? "inActive" : "active"}`);
    this.segment.setAttribute("id", this.segmentName);
    this.textHolder = document.createElement("p");
    this.textHolder.append(
      document.createTextNode(this.segmentName[this.segmentName.length - 1])
    );
    this.segment.append(this.textHolder);

    return this.segment;
  }
}
