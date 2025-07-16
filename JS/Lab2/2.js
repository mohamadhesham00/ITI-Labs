function isPalindrome(word) {
  var i = 0;
  var j = word.length - 1;
  while (i < j) {
    console.log(word[i]);
    console.log(word[j]);
    if (word[i] != word[j]) return false;
    i++;
    j--;
  }
  return true;
}
var word = prompt("Enter a word");
var isCaseSensitive = confirm("Do you consider case of entered string?");
if (!isCaseSensitive) word = word.toLowerCase();
var result = isPalindrome(word);
document.writeln(
  `<h1>the string ${word} ${result ? "is" : "isn't"} palindrome</h1>`
);
