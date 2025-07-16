function acceptInput() {
  var input = Number(prompt("Enter numbers to sort") ?? "NaN");
  console.log(input);
  var arr = [];
  while (!isNaN(input)) {
    arr.push(input);
    input = Number(prompt("Enter numbers to sort") ?? "NaN");
  }
  return arr;
}
function ascSort(i, j) {
  return i - j;
}
function descSort(i, j) {
  return j - i;
}

function sort(arr) {
  var ascSorted = arr.slice().sort(ascSort);
  var descSorted = arr.slice().sort(descSort);
  return {
    arr: arr,
    ascSorted: ascSorted,
    descSorted: descSorted,
  };
}
function print({ arr, ascSorted, descSorted }) {
  document.writeln(`<h1> Sorting </h1> <hr>`);
  document.writeln(
    `<h1> <span class="red">you have entered the values of</span> ${arr} </h1>`
  );
  document.writeln(
    `<h1> <span class="red">your values after being sorted ascending </span> ${ascSorted} </h1>`
  );
  document.writeln(
    `<h1> <span class="red"> your values after being sorted descending </span>${descSorted} </h1>`
  );
}
sort(acceptInput());
