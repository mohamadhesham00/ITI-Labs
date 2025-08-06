function person(_name) {
  this.name = _name;
}
function student(_name, _school) {
  person.call(this, _name);
  this.school = _school;
}

var p1 = new person("Mohamad");
console.log(p1);

var s1 = new student("Mohamad", "ALA");
console.log(s1);

//task2
person.prototype.greet = function () {
  console.log(`hello ${name}`);
};

student.prototype = Object.create(person.prototype);
student.prototype.constructor = student;

student.prototype.greet = function () {
  console.log(`hello ${name} and your school is ${this.school}`);
};

var p1 = new person("Mohamad");
p1.greet();

var s1 = new student("Mohamad", "ALA");
s1.greet();
