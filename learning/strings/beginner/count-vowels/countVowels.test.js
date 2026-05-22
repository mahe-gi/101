const countVowels = require("./countVowels");

describe("countVowels", () => {
  test("counts vowels in a normal lowercase string", () => {
    expect(countVowels("mahesh")).toBe(2);
  });

  test("counts vowels in a mixed-case string", () => {
    expect(countVowels("MahESH")).toBe(2);
  });

  test("returns 0 for a string with no vowels", () => {
    expect(countVowels("rhythm")).toBe(0);
  });

  test("returns 0 for an empty string", () => {
    expect(countVowels("")).toBe(0);
  });

  test("counts vowels with punctuation ignored", () => {
    expect(countVowels("a-b-c!o")).toBe(2);
  });

  test("throws TypeError for non-string input", () => {
    expect(() => countVowels(123)).toThrow(TypeError);
  });
});
