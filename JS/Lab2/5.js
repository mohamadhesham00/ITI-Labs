function acceptInput() {
  var word = prompt("Enter a sentence");
  var char = prompt("Enter a char to get their indexes");
  return {
    word: word,
    char: char,
  };
}
function getIndexes({ word, char }) {
  var indexes = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i] == char) indexes.push(i);
  }
  return {
    word: word,
    char: char,
    indexes: indexes,
  };
}
function print({ word, char, indexes }) {
  document.writeln(`<h1> <span class="red">The input is </span> ${word} </h1>`);
  document.writeln(`<h1> <span class="red">The letter is </span> ${char}</h1>`);
  document.writeln(
    `<h1> <span class="red"> indexes =  </span> ${indexes}</h1>`
  );
}
print(getIndexes(acceptInput()));
