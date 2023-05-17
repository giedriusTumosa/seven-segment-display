export const charLib = [
  { char: "0", segmentCode: "abcdef" },
  { char: "1", segmentCode: "bc" },
  { char: "2", segmentCode: "abdeg" },
  { char: "3", segmentCode: "abcdg" },
  { char: "4", segmentCode: "bcfg" },
  { char: "5", segmentCode: "acdfg" },
  { char: "6", segmentCode: "acdefg" },
  { char: "7", segmentCode: "abc" },
  { char: "8", segmentCode: "abcdefg" },
  { char: "9", segmentCode: "abcdfg" },
  { char: ".", segmentCode: "p" },
];

export function segmentCodeSearch(charToSearch) {
  return charLib.filter((el) => el.char === charToSearch)[0]?.segmentCode;
}
