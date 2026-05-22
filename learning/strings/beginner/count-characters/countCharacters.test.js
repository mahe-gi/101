const countCharacters = require("./countCharacters");

describe("countCharacters", () => {
  test("counts characters in a regular string", () => {
    expect(countCharacters("mahesh")).toBe(6);
  });

  test("counts a single character", () => {
    expect(countCharacters("a")).toBe(1);
  });

  test("returns 0 for an empty string", () => {
    expect(countCharacters("")).toBe(0);
  });

  test("counts spaces as characters", () => {
    expect(countCharacters("hello world")).toBe(11);
  });

  test("counts punctuation as characters", () => {
    expect(countCharacters("hi!")).toBe(3);
  });

  test("handles repeated characters", () => {
    expect(countCharacters("aaaaaa")).toBe(6);
  });

  test("throws TypeError for a number input", () => {
    expect(() => countCharacters(123)).toThrow(TypeError);
  });

  test("throws TypeError for null input", () => {
    expect(() => countCharacters(null)).toThrow(TypeError);
  });

  test("throws TypeError for undefined input", () => {
    expect(() => countCharacters(undefined)).toThrow(TypeError);
  });

  test("throws TypeError for an array input", () => {
    expect(() => countCharacters(["a", "b"])).toThrow(TypeError);
  });
});
