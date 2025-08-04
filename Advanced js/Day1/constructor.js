function person(_name, _age) {
  this.name = _name;
  this.age = _age;
  console.log(`name = ${this.name} and age = ${_age}`);
  this.greet = function () {
    console.log(this.name);
  };
}

var mohamad = new person("Mohamad", 22);
mohamad.greet();

/* =================================== */
function personRefactored(_name, _age) {
  this.name = _name;
  this.age = _age;
}
personRefactored.prototype.greet = function () {
  console.log(this.name);
};

var ali = new personRefactored("Ali", 22);
ali.greet();
