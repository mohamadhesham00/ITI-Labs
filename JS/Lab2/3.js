function acceptInput() {
  var input = Number(prompt("Enter numbers to make operations on it") ?? "NaN");
  var arr = [];
  while (input != 0 && !isNaN(input)) {
    arr.push(input);
    input = Number(prompt("Enter numbers to make operations on it") ?? "NaN");
  }
  return arr;
}

function applyOperations(arr) {
  var sum = arr[0] || 0;
  var multiply = arr[0] || 0;
  var division = arr[0] || 0;
  for (var i = 1; i < arr.length; i++) {
    sum += arr[i];
    multiply *= arr[i];
    division /= arr[i];
  }
  return {
    length: arr.length,
    sum: sum,
    multiply: multiply,
    division: division,
  };
}
function print({ length, sum, multiply, division }) {
  document.writeln(
    `<h1>Adding -- Multiplying -- and dividing ${length} items</h1>`
  );
  document.writeln(
    `<h1> <span class="red"> Sum of the numbers = </span> ${sum}  </h1>`
  );
  document.writeln(
    `<h1> <span class="red"> Multiply of the numbers = </span> ${multiply} </h1>`
  );
  document.writeln(
    `<h1> <span class="red"> Division of the numbers = </span> ${division} </h1>`
  );
}
print(applyOperations(acceptInput()));
