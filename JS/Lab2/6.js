function add(x, y) {
  return x + y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return y == 0 ? "You cannot divide by zero" : x / y;
}
function applyOperations(x, y, operation) {
  return operation(x, y);
}
function print(x, y) {
  document.writeln(
    `<h1><span class="red">The output from applyOperations(x,y, add) = </span>
          ${applyOperations(x, y, add)}</h1>`
  );
  document.writeln(
    `<h1><span class="red">The output from applyOperations(x,y, multiply) = </span>
          ${applyOperations(x, y, multiply)}</h1>`
  );
  document.writeln(
    `<h1><span class="red">The output from applyOperations(x,y, divide) = </span>
          ${applyOperations(x, y, divide)}</h1>`
  );
}
var x = Number(prompt("Enter x"));
var y = Number(prompt("Enter y"));
print(x, y);
