const maxElement = require("./maxElement");

describe("maxElement", () => {
  test("returns the largest value in a normal array", () => {
    expect(maxElement([3, 7, 2, 9, 1])).toBe(9);
  });

  test("handles negative numbers", () => {
    expect(maxElement([-10, -3, -7])).toBe(-3);
  });

  test("handles a single-item array", () => {
    expect(maxElement([42])).toBe(42);
  });

  test("handles decimal values", () => {
    expect(maxElement([2.5, 2.75, 2.6])).toBe(2.75);
  });

  test("throws RangeError for an empty array", () => {
    expect(() => maxElement([])).toThrow(RangeError);
  });

  test("throws TypeError for non-array input", () => {
    expect(() => maxElement(10)).toThrow(TypeError);
  });
});
