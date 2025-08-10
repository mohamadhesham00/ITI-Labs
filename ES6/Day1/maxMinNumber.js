let numbers = [4, 2, 6, 9, 5, 100, 52];
function getMax(...arr) {
  let min = Math.min(...arr);
  let mx = Math.min(...arr);
  return { min, mx };
}
let { min: min, mx: mx } = getMax(...numbers);
console.log(min);
console.log(mx);
