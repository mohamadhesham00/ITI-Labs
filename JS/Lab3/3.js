function acceptInput() {
  var input = Number(prompt("Enter numbers") ?? "NaN");
  var arr = [];
  while (!isNaN(input)) {
    arr.push(input);
    input = Number(prompt("Enter numbers") ?? "NaN");
  }
  return arr;
}
function unique(arr) {
  var unique = [];
  for (var i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) == -1) unique.push(arr[i]);
  }
  return unique;
}
function getValues(arr) {
  var nSmallestNumber = arr.length > 1 ? arr[1] : arr[0];
  var nBiggestNumber = arr.length > 1 ? arr[arr.length - 2] : arr[0];
  return {
    arr,
    nSmallestNumber,
    nBiggestNumber,
  };
}
function print({ arr, nSmallestNumber, nBiggestNumber }) {
  document.writeln(`<h1>Unique Array = ${arr}</h1>`);
  document.writeln(`<h1>2nd smallest number = ${nSmallestNumber}</h1>`);
  document.writeln(`<h1>2nd biggest number = ${nBiggestNumber}</h1>`);
}
print(getValues(unique(acceptInput())));
