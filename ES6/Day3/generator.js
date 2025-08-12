// the parameter passed determines the number of elements displayed from the series.
function* fibonacciN() {
  let fibonacci = [1, 1];
  while (fibonacci.length < this.n) {
    fibonacci.push(
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
    );
  }
  for (let i = 0; i < this.n; i++) {
    yield fibonacci[i];
  }
}

let number = {
  n: 7,
};

number[Symbol.iterator] = fibonacciN;
for (let i of number) {
  console.log(i);
}

//the parameter passed determines the max number of the displayed series should not exceed its value.

function* fibonacciTillN() {
  let fibonacci = [1, 1];
  let nextNumber = fibonacci.at(-1) + fibonacci.at(-2);
  while (nextNumber < this.n) {
    fibonacci.push(nextNumber);
    nextNumber = fibonacci.at(-1) + fibonacci.at(-2);
  }
  for (let i = 0; i < fibonacci.length; i++) {
    yield fibonacci[i];
  }
}

let number2 = {
  n: 83,
};

number2[Symbol.iterator] = fibonacciTillN;
for (let i of number2) {
  console.log(i);
}

// Array generator
function* iterate() {
  for (let i = 0; i < this.length; i++) {
    yield this[i];
  }
}
