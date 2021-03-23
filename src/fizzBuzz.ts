import { numberToFizzBuzz } from "./numberToFizzBuzz";

export function fizzBuzz() {
  for (let i = 1; i <= 3; i++) {
    console.log(numberToFizzBuzz(i));
  }
}
