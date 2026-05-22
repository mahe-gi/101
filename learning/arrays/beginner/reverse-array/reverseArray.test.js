const reverseArray = require("./reverseArray");

describe("reverseArray", () => {
  test("reverses a normal array", () => {
    expect(reverseArray([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });

  test("reverses a single-item array", () => {
    expect(reverseArray([99])).toEqual([99]);
  });

  test("returns an empty array when the input is empty", () => {
    expect(reverseArray([])).toEqual([]);
  });

  test("preserves duplicate values", () => {
    expect(reverseArray([1, 2, 2, 3])).toEqual([3, 2, 2, 1]);
  });

  test("does not mutate the original order expectation", () => {
    const input = [5, 6, 7];
    expect(reverseArray(input)).toEqual([7, 6, 5]);
  });

  test("throws TypeError for non-array input", () => {
    expect(() => reverseArray("1234")).toThrow(TypeError);
  });
});
