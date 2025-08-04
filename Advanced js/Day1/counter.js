function createCounter() {
  var count = 0;
  return function () {
    ++count;
    return count;
  };
}
var result = createCounter();
console.log(result());
console.log(result());
console.log(result());
console.log(result());
