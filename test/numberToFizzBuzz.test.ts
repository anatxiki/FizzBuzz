import { numberToFizzBuzz } from "../src/numberToFizzBuzz";

describe("Number to FizzBuzz", () => {
  it.each([
    [1, 1],
    [2, 2],
    [4, 4],
    [3, "Fizz"],
    [6, "Fizz"],
    [9, "Fizz"],
    [5, "Buzz"],
    [10, "Buzz"],
    [20, "Buzz"],
    [15, "FizzBuzz"],
    [30, "FizzBuzz"],
    [45, "FizzBuzz"],
  ])("para el número %d devuelve %s", (value, expected) => {
    const result = numberToFizzBuzz(value);

    expect(result).toBe(expected);
  });

  it("la función fizzbuzz devuelve 100 valores", () => {
    expect(fizzbuzz()).toHaveLength(100);
  });
});

function fizzbuzz(): any {
  return Array(100);
}
