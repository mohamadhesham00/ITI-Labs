class Shape {
  constructor() {
    if (this.constructor == Shape) {
      throw Error("Cannot instantiate object from abstract class");
    }
  }
  perimeter() {
    throw new Error("Method perimeter must be implemented");
  }
  area() {
    throw new Error("Method area must be implemented");
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
  area() {
    return this.width * this.height;
  }
  toString() {
    return `Rectangle: area = ${this.area()}; perimeter = ${this.perimeter()}`;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  perimeter() {
    return 2 * Math.PI * this.radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
  toString() {
    return `Circle : area = ${this.area()}; perimeter = ${this.perimeter()}`;
  }
}

var rect = new Rectangle(10, 5);
console.log(rect.toString());

var cir = new Circle(7);
console.log(cir.toString());
