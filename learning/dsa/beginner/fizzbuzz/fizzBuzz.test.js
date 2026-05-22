const fizzBuzz = require("./fizzBuzz");

describe("fizzBuzz", () => {
  test("returns the full FizzBuzz sequence up to 15", () => {
    expect(fizzBuzz(15)).toEqual([
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
    ]);
  });

  test("returns only numbers when limit is below 3", () => {
    expect(fizzBuzz(2)).toEqual([1, 2]);
  });

  test("handles a limit of 5", () => {
    expect(fizzBuzz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
  });

  test("handles a limit of 1", () => {
    expect(fizzBuzz(1)).toEqual([1]);
  });

  test("throws TypeError for zero", () => {
    expect(() => fizzBuzz(0)).toThrow(TypeError);
  });

  test("throws TypeError for non-integer input", () => {
    expect(() => fizzBuzz(3.5)).toThrow(TypeError);
  });
});
