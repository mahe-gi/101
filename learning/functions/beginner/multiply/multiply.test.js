const multiply = require('./multiply');

describe('multiply — MINI TASK 1', () => {
  // Normal cases
  test('multiplies two positive integers', () => {
    expect(multiply(2, 4)).toBe(8);
  });

  test('multiplies with zero', () => {
    expect(multiply(0, 5)).toBe(0);
  });

  test('multiplies negative and positive', () => {
    expect(multiply(-3, 5)).toBe(-15);
  });

  // Edge / tricky cases
  test('multiplies decimals', () => {
    expect(multiply(2.5, 4)).toBe(10);
  });

  test('negative times negative is positive', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  test('very large numbers may overflow to Infinity (deterministic check)', () => {
    // JavaScript will return Infinity for operations that overflow
    expect(multiply(Number.MAX_VALUE, 2)).toBe(Number.POSITIVE_INFINITY);
  });

  // Invalid input cases
  test('non-number first argument throws TypeError', () => {
    expect(() => multiply('2', 3)).toThrow(TypeError);
  });

  test('non-number second argument throws TypeError', () => {
    expect(() => multiply(2, null)).toThrow(TypeError);
  });

  test('both arguments non-number throws TypeError', () => {
    expect(() => multiply(undefined, 'x')).toThrow(TypeError);
  });
});
