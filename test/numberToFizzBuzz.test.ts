import { numberToFizzBuzz } from "../src/numberToFizzBuzz";

describe("Number to FizzBuzz", () => {
  it("para el número 1 devuelve 1", () => {
    const result = numberToFizzBuzz(1);

    expect(result).toBe(1);
  });

  it("para el número 2 devuelve 2", () => {
    const result = numberToFizzBuzz(2);

    expect(result).toBe(2);
  });

  it("para el número 4 devuelve 4", () => {
    const result = numberToFizzBuzz(4);

    expect(result).toBe(4);
  });
});
