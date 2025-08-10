let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

function capitalizeWords(...words) {
  return words.map((value) => value[0].toUpperCase() + value.slice(1));
}
capitalizeWords(...fruits);
