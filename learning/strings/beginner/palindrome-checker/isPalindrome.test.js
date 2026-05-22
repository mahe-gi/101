const isPalindrome = require("./isPalindrome");

describe("isPalindrome", () => {
  test("returns true for a palindrome", () => {
    expect(isPalindrome("madam")).toBe(true);
  });

  test("returns false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("returns true for a single-character string", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  test("returns true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("treats exact case as significant", () => {
    expect(isPalindrome("Madam")).toBe(false);
  });

  test("throws TypeError for non-string input", () => {
    expect(() => isPalindrome(null)).toThrow(TypeError);
  });
});
