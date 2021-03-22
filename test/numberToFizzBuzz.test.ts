import { numberToFizzBuzz } from "../src/numberToFizzBuzz";

describe("Number to FizzBuzz", () => {
  it.each([
    [1, 1],
    [2, 2],
    [4, 4],
    [3, "Fizz"],
    [6, "Fizz"],
    [9, "Fizz"],
  ])("para el número %d devuelve %s", (value, expected) => {
    const result = numberToFizzBuzz(value);

    expect(result).toBe(expected);
  });
});
