var exceedLimit = (arr, length) => arr.filter((value) => value.length > length);

let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

console.log(exceedLimit(fruits, 10));
