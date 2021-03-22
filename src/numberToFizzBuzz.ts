export function numberToFizzBuzz(value: number) {
  if (isFizz(value)) {
    return "Fizz";
  }

  if (value % 5 === 0) {
    return "Buzz";
  }

  return value;
}

function isFizz(value: number) {
  return value % 3 === 0;
}
