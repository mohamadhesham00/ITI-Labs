function iterate() {
  let values = Object.values(this);
  let length = values.length;
  let index = 0;
  return {
    next: function () {
      if (index == length) {
        return {
          value: undefined,
          done: true,
        };
      } else {
        return {
          value: values[index++],
          done: false,
        };
      }
    },
  };
}
var person = {
  name: "Mohamad",
  age: 22,
  gender: "Male",
};
person[Symbol.iterator] = iterate;

for (let i of person) {
  console.log(i);
}
