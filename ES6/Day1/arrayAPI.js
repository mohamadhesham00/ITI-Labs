let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

function isAllString() {
  return fruits.every((value) => typeof value == "string");
}

function hasSomeStartsWithA() {
  return fruits.some((value) => value.startsWith("a"));
}

function getFilteredArray() {
  return fruits.filter(
    (value) => value.startsWith("b") || value.startsWith("s")
  );
}

function getFavoriteFruits() {
  return fruits.map((value) => `I Like ${value}`);
}

function forEachPrinter() {
  var favorite = getFavoriteFruits();
  favorite.forEach((value) => console.log(value));
}
