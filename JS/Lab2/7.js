function acceptInput() {
  var input = Number(prompt("Enter numbers to square them") ?? "NaN");
  var arr = [];
  while (input != 0 && !isNaN(input)) {
    arr.push(input);
    input = Number(prompt("Enter numbers to square them") ?? "NaN");
  }
  return arr;
}
function square(arr) {
  var squared = [];
  for (var i = 0; i < arr.length; i++) {
    squared.push(arr[i] * arr[i]);
  }
  return {
    arr: arr,
    squared: squared,
  };
}
function print({ arr, squared }) {
  document.writeln(
    `<h1> <span class="red">The original array = </span>${arr}</h1>`
  );
  document.writeln(
    `<h1> <span class="red">The squared array = </span>${squared}</h1>`
  );
}
print(square(acceptInput()));
