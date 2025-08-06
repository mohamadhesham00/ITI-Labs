function person(_age) {
  this.age = _age;
}
person.compareAge = function (p1, p2) {
  return p1.age - p2.age;
};

var person1 = new person(27);
var person2 = new person(25);

var result = person.compareAge(person1, person2);
if (result > 0) {
  console.log("person1");
} else if (result < 0) {
  console.log("person2");
} else {
  console.log("equal");
}
