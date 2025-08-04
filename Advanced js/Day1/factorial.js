function factorial(number) {
  if (number == 1) return number;
  return number * factorial(number - 1);
}

var fact = [];
fact[1] = 1;
function memoizedFactorial(number) {
  if (!fact[number]) {
    fact[number] = number * memoizedFactorial(number - 1);
  }
  return fact[number];
}
