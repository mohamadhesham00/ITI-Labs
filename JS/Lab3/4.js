function acceptInput() {
  var sentence = prompt("Enter sentence to capitalize");
  return sentence;
}
function capitalize(sentence) {
  var words = sentence.split(" ");
  var capitalizedWords = [];
  for (var i = 0; i < words.length; i++) {
    var capitalizedWord = words[i][0].toUpperCase().concat(words[i].slice(1));
    capitalizedWords.push(capitalizedWord);
  }
  return capitalizedWords.join(" ");
}
function print(capitalizedSentence) {
  document.writeln(`<h1> ${capitalizedSentence}</h1>`);
}
print(capitalize(acceptInput()));
