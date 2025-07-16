function countChar(word, char) {
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] == char) count++;
  }
  return count;
}

var word = prompt("Enter a word");
var char = prompt("Enter a char to count");
var count = countChar(word, char);
document.writeln(
  `<h1>char ${char} occurred ${count} ${count == 1 ? "time" : "times"} </h1>`
);
