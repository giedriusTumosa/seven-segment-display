import Segment from "./Segment.js";

export default class Display {
  constructor() {
    this.segments = [
      new Segment("seg_a"),
      new Segment("seg_b"),
      new Segment("seg_c"),
      new Segment("seg_g"),
      new Segment("seg_e"),
      new Segment("seg_f"),
      new Segment("seg_d"),
      new Segment("seg_dp"),
    ];
    this.segmentCode = "";
  }

  render() {
    this.display = document.createElement("div");
    this.display.setAttribute("class", "display");

    this.mainSegmentsWrapper = document.createElement("div");
    this.mainSegmentsWrapper.setAttribute("class", "mainSegmentsWrapper");
    this.dotSegmentWrapper = document.createElement("div");
    this.dotSegmentWrapper.setAttribute("class", "dotSegmentWrapper");

    this.segmentSwitcher();

    this.segments.forEach((segment, index) => {
      if (index === this.segments.length - 1) {
        this.dotSegmentWrapper.append(segment.render());
      } else {
        this.mainSegmentsWrapper.append(segment.render());
      }
    });

    this.display.append(this.mainSegmentsWrapper, this.dotSegmentWrapper);

    return this.display;
  }
  segmentSwitcher() {
    const segmentCodeToArray = this.segmentCode?.split("");

    this.segments.forEach((segment) => {
      if (segmentCodeToArray?.includes(segment.segmentName.slice(4))) {
        !segment.isOn && segment.switchOn();
      } else {
        segment.switchOff();
      }
    });
  }
}
