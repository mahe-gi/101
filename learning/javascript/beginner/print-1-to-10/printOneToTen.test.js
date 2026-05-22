const printOneToTen = require("./printOneToTen");

describe("printOneToTen", () => {
  test("returns numbers from 1 to 10", () => {
    expect(printOneToTen()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test("returns an array", () => {
    expect(Array.isArray(printOneToTen())).toBe(true);
  });

  test("starts with 1", () => {
    expect(printOneToTen()[0]).toBe(1);
  });

  test("ends with 10", () => {
    expect(printOneToTen()[9]).toBe(10);
  });

  test("has exactly 10 values", () => {
    expect(printOneToTen().length).toBe(10);
  });
});
