const countWords = require('./countWords');

describe('countWords — Exercise 1', () => {
  // Normal cases
  test('counts words in a regular sentence', () => {
    expect(countWords('I love JavaScript')).toBe(3);
  });

  test('single word returns 1', () => {
    expect(countWords('Hello')).toBe(1);
  });

  // Edge cases
  test('empty string returns 0', () => {
    expect(countWords('')).toBe(0);
  });

  test('string with only spaces returns 0', () => {
    // whitespace-only should not be counted as words
    expect(countWords('     ')).toBe(0);
  });

  // Tricky cases
  test('multiple spaces between words', () => {
    expect(countWords('Hello   world')).toBe(2);
  });

  test('leading and trailing spaces', () => {
    expect(countWords('  leading and trailing  ')).toBe(3);
  });

  test('tabs and newlines as separators', () => {
    expect(countWords('one\ttwo\nthree')).toBe(3);
  });

  test('contractions and punctuation', () => {
    // punctuation attached to words should still count as words
    expect(countWords("it's a test, isn't it? ")).toBe(5);
  });

  // Invalid input cases
  test('non-string input throws TypeError', () => {
    expect(() => countWords(123)).toThrow(TypeError);
    expect(() => countWords(null)).toThrow(TypeError);
    expect(() => countWords(undefined)).toThrow(TypeError);
  });
});
