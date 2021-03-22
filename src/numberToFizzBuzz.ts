export function numberToFizzBuzz(value: number) {
  if (isFizz(value)) {
    return "Fizz";
  }

  return value;
}

function isFizz(value: number) {
  return value % 3 === 0;
}
