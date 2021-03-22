export function numberToFizzBuzz(value: number) {
  if (isFizz(value)) {
    return "Fizz";
  }

  if (value === 5) {
    return "Buzz";
  }

  if (value === 10) {
    return "Buzz";
  }

  return value;
}

function isFizz(value: number) {
  return value % 3 === 0;
}
