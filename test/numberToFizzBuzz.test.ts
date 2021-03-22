import { numberToFizzBuzz } from "../src/numberToFizzBuzz";

describe("Number to FizzBuzz", () => {
  it("para el número 1 devuelve 1", () => {
    const result = numberToFizzBuzz(1);

    expect(result).toBe(1);
  });
});
