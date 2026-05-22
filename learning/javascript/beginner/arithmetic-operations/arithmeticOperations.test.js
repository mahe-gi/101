const arithmeticOperations = require("./arithmeticOperations");

describe("arithmeticOperations", () => {
  test("returns addition, subtraction, and multiplication for positive numbers", () => {
    expect(arithmeticOperations(10, 20)).toEqual({
      addition: 30,
      subtraction: -10,
      multiplication: 200,
    });
  });

  test("works with negative numbers", () => {
    expect(arithmeticOperations(-4, 6)).toEqual({
      addition: 2,
      subtraction: -10,
      multiplication: -24,
    });
  });

  test("works when one operand is zero", () => {
    expect(arithmeticOperations(0, 8)).toEqual({
      addition: 8,
      subtraction: -8,
      multiplication: 0,
    });
  });

  test("works with decimal numbers", () => {
    expect(arithmeticOperations(2.5, 1.5)).toEqual({
      addition: 4,
      subtraction: 1,
      multiplication: 3.75,
    });
  });

  test("throws TypeError for string input", () => {
    expect(() => arithmeticOperations("10", 20)).toThrow(TypeError);
  });

  test("throws TypeError for NaN input", () => {
    expect(() => arithmeticOperations(NaN, 20)).toThrow(TypeError);
  });
});
