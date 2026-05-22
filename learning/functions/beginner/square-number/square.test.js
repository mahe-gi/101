const square = require("./square");

describe("square", () => {
  test("returns the square of a positive number", () => {
    expect(square(7)).toBe(49);
  });

  test("returns the square of zero", () => {
    expect(square(0)).toBe(0);
  });

  test("returns the square of a negative number", () => {
    expect(square(-4)).toBe(16);
  });

  test("returns the square of a decimal number", () => {
    expect(square(2.5)).toBe(6.25);
  });

  test("throws TypeError for string input", () => {
    expect(() => square("7")).toThrow(TypeError);
  });

  test("throws TypeError for undefined input", () => {
    expect(() => square(undefined)).toThrow(TypeError);
  });
});
