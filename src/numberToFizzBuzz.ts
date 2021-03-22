export function numberToFizzBuzz(value: number) {
  if (isFizz(value)) {
    return "Fizz";
  }

  if (isBuzz(value)) {
    return "Buzz";
  }

  return value;
}

function isFizz(value: number) {
  return value % 3 === 0;
}

function isBuzz(value: number) {
  return value % 5 === 0;
}
