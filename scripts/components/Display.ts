import Segment from "./Segment.js";

interface CharLib {
  [key: string]: string;
}

type CharLibKey = keyof CharLib;

const charLib: CharLib = {
  0: "abcdef",
  1: "bc",
  2: "abdeg",
  3: "abcdg",
  4: "bcfg",
  5: "acdfg",
  6: "acdefg",
  7: "abc",
  8: "abcdefg",
  9: "abcdfg",
  ".": "p",
  ",": "p",
};

export default class Display {
  segments: Segment[];
  _charToDisplay: CharLibKey;
  display: HTMLElement;
  mainSegmentsWrapper: HTMLElement;
  dotSegmentWrapper: HTMLElement;
  segment: HTMLElement;

  constructor() {
    this.segments = [
      new Segment("seg_a"),
      new Segment("seg_b"),
      new Segment("seg_c"),
      new Segment("seg_g"),
      new Segment("seg_e"),
      new Segment("seg_f"),
      new Segment("seg_d"),
      new Segment("seg_p"),
    ];
    this._charToDisplay = "";
  }

  set charToDisplay(char: CharLibKey) {
    this._charToDisplay = char;
    this.render();
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
    const segmentCodeToArray = charLib[this._charToDisplay]?.split("");
    this.segments.forEach((segment) => {
      if (segmentCodeToArray?.includes(segment.segmentName.slice(4))) {
        !segment.isOn && segment.switchOn();
      } else {
        segment.switchOff();
      }
    });
  }

  switchDotSegment(switchOn) {
    const dotSegment: Segment | undefined = this.segments.find(
      (segment) => segment.segmentName === "seg_p"
    );
    switchOn ? dotSegment?.switchOn() : dotSegment?.switchOff();
    this.render();
  }
  renderSegment(segmentName: string, isOn: boolean): HTMLElement {
    const segment = document.createElement("div");
    segment.setAttribute("class", "segment");
    segment.classList.add(`${!isOn ? "inActive" : "active"}`);
    segment.setAttribute("id", segmentName);
    const textHolder = document.createElement("p");
    textHolder.append(
      document.createTextNode(segmentName[segmentName.length - 1])
    );

    this.segment.append(textHolder);

    return segment;
  }
}
