import { numberToFizzBuzz } from "./numberToFizzBuzz";

export function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    console.log(numberToFizzBuzz(i));
  }
}
