let numbers = [1, -4, 5, 3, -8];
function getPositiveNumbers(...arr) {
  return arr.filter((value) => value > 0);
}

getPositiveNumbers(...numbers);
