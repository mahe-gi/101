const printName = require("./printName");

describe("printName", () => {
  test("formats a regular name", () => {
    expect(printName("Mahesh")).toBe("My name is Mahesh");
  });

  test("formats a different valid name", () => {
    expect(printName("Asha")).toBe("My name is Asha");
  });

  test("handles a single-character name", () => {
    expect(printName("M")).toBe("My name is M");
  });

  test("handles a name with spaces", () => {
    expect(printName("Mary Jane")).toBe("My name is Mary Jane");
  });

  test("throws TypeError for non-string input", () => {
    expect(() => printName(123)).toThrow(TypeError);
  });

  test("throws TypeError for null input", () => {
    expect(() => printName(null)).toThrow(TypeError);
  });
});
