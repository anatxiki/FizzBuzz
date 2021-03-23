import { fizzBuzz } from "../src/fizzBuzz";

describe("FizzBuzz", () => {
  it.each([
    [1, 1],
    [2, 2],
    [3, "Fizz"],
    [100, "Buzz"],
  ])("pinta el resultado de FizzBuzz para %d", (value, expected) => {
    jest.spyOn(console, "log").mockReturnValue();

    fizzBuzz();

    expect(console.log).toHaveBeenNthCalledWith(value, expected);
  });
});
