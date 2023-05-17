export default class Segment {
  constructor(segmentName) {
    this.segmentName = segmentName;
    this.isOn = false;
  }
  switchOn() {
    this.isOn = true;
  }
  switchOff() {
    this.isOn = false;
  }
  get state() {
    return this.isOn;
  }

  render() {
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
