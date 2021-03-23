import { fizzBuzz } from "../src/fizzBuzz";

describe("FizzBuzz", () => {
  it("pinta el resultado de FizzBuzz para 1", () => {
    jest.spyOn(console, "log");

    fizzBuzz();

    expect(console.log).toHaveBeenCalledWith(1);
  });

  it("pinta el resultado de FizzBuzz para 2", () => {
    jest.spyOn(console, "log");

    fizzBuzz();

    expect(console.log).toHaveBeenNthCalledWith(2, 2);
  });

  it("pinta el resultado de FizzBuzz para 3", () => {
    jest.spyOn(console, "log");

    fizzBuzz();

    expect(console.log).toHaveBeenNthCalledWith(3, "Fizz");
  });
});
