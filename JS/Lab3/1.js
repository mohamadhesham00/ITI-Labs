function acceptInput() {
  var input = prompt("Enter names to get N random of them");
  var arr = [];
  while (input != null && input.length > 0) {
    arr.push(input);
    input = prompt("Enter names to get N random of them");
  }
  var numOfRandom = Number(
    prompt("Enter number of random names you want to get")
  );
  return {
    arr: arr,
    numOfRandom: numOfRandom,
  };
}
function getRandomNames({ arr, numOfRandom }) {
  var indexes = [];
  var i = 0;
  while (i < numOfRandom) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    if (indexes.indexOf(randomIndex) == -1) {
      i++;
      indexes.push(randomIndex);
    }
  }
  return {
    arr: arr,
    indexes: indexes,
  };
}
function print({ arr, indexes }) {
  for (var i = 0; i < indexes.length; i++) {
    document.writeln(`<h1>${i + 1}- ${arr[indexes[i]]}</h1>`);
  }
}
print(getRandomNames(acceptInput()));
