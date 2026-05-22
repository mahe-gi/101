const printEvenNumbers = require("./printEvenNumbers");

describe("printEvenNumbers", () => {
  test("returns even numbers from 1 to 20", () => {
    expect(printEvenNumbers()).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });

  test("returns an array", () => {
    expect(Array.isArray(printEvenNumbers())).toBe(true);
  });

  test("starts with 2", () => {
    expect(printEvenNumbers()[0]).toBe(2);
  });

  test("ends with 20", () => {
    expect(printEvenNumbers()[printEvenNumbers().length - 1]).toBe(20);
  });

  test("has 10 values", () => {
    expect(printEvenNumbers().length).toBe(10);
  });
});
