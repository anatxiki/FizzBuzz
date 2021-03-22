export function fizzbuzz(): any {
  return Array(100);
}

export function numberToFizzBuzz(value: number) {
  if (isFizzBuzz(value)) {
    return "FizzBuzz";
  }

  if (isFizz(value)) {
    return "Fizz";
  }

  if (isBuzz(value)) {
    return "Buzz";
  }

  return value;
}

function isFizzBuzz(value: number) {
  return value % 5 === 0 && value % 3 === 0;
}

function isFizz(value: number) {
  return value % 3 === 0;
}

function isBuzz(value: number) {
  return value % 5 === 0;
}
