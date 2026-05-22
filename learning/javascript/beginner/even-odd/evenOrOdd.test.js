const evenOrOdd = require("./evenOrOdd");

describe("evenOrOdd", () => {
  test("returns Odd for an odd number", () => {
    expect(evenOrOdd(7)).toBe("Odd");
  });

  test("returns Even for an even number", () => {
    expect(evenOrOdd(8)).toBe("Even");
  });

  test("treats zero as even", () => {
    expect(evenOrOdd(0)).toBe("Even");
  });

  test("handles negative odd numbers", () => {
    expect(evenOrOdd(-3)).toBe("Odd");
  });

  test("handles negative even numbers", () => {
    expect(evenOrOdd(-4)).toBe("Even");
  });

  test("throws TypeError for string input", () => {
    expect(() => evenOrOdd("7")).toThrow(TypeError);
  });
});
