const sumArray = require("./sumArray");

describe("sumArray", () => {
  test("sums a normal array of numbers", () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
  });

  test("handles negative numbers", () => {
    expect(sumArray([5, -2, 7])).toBe(10);
  });

  test("returns 0 for an empty array", () => {
    expect(sumArray([])).toBe(0);
  });

  test("handles decimal values", () => {
    expect(sumArray([1.5, 2.5, 3])).toBe(7);
  });

  test("throws TypeError for non-array input", () => {
    expect(() => sumArray("1,2,3")).toThrow(TypeError);
  });
});
