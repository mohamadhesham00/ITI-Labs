function sum(...arr) {
  return arr.reduce((acc, currentValue) => acc + currentValue, 0);
}
let numbers = [4, 2, 6, 9, 5, 100, 52];

sum(...numbers);
