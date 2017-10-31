import {formatMilisecondsToText} from "./time-util"
describe("time-util:formatMilisecondsToText", () => {
  it("should return string", () => {
    const got = formatMilisecondsToText(100);
    expect(typeof got).toBe("string");
  })
  it("should return text in a MM:SS format", () => {
    const expectedValues = [
      [100000, "01:40"],
      [200000, "03:20"],
      [201000, "03:21"],
      [1000, "00:01"],
      [0, "00:00"]
    ]
    for (let [argument, expectedValue] of expectedValues) {
      expect(formatMilisecondsToText(argument)).toBe(expectedValue);
    }
  })
})