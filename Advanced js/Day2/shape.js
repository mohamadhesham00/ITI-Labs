function shape() {
  if ((this.constructor = shape)) {
    return new Error("Cannot make instance of abstract shape function");
  }
}
// Abstract methods
shape.prototype.area = function () {
  throw new Error("Method area must be implemented");
};

shape.prototype.perimeter = function () {
  throw new Error("Method perimeter must be implemented");
};

function rectangle(_width, _height) {
  this.width = _width;
  this.height = _height;
}
rectangle.prototype = Object.create(shape.prototype);
rectangle.prototype.constructor = rectangle;

rectangle.prototype.area = function () {
  return this.width * this.height;
};

rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

rectangle.prototype.toString = function () {
  return `Rectangle: area = ${this.area()}; perimeter = ${this.perimeter()}`;
};

function circle(radius) {
  this.radius = radius;
}

circle.prototype = Object.create(shape.prototype);
circle.prototype.constructor = circle;

circle.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};

circle.prototype.perimeter = function () {
  return 2 * Math.PI * this.radius;
};

circle.prototype.toString = function () {
  return `Circle : area = ${this.area()}; perimeter = ${this.perimeter()}`;
};

var rect = new rectangle(10, 5);
console.log(rect.toString());

var cir = new circle(7);
console.log(cir.toString());
