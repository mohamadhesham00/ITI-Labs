function flattenObject(obj, key) {
  for (var i in obj) {
    if (typeof obj[i] == "object") {
      key += key.length == 0 ? i : `.${i}`;
      flattenObject(obj[i], key);
    } else {
      document.writeln(
        `<h1>${key.length == 0 ? "" : key + "."}${i} : ${obj[i]}<h1>`
      );
    }
  }
}
const person = {
  name: "Mohamed",
  age: 22,
  address: {
    street: "123 Main St",
    city: "Cairo",
    country: "Egypt",
  },
  contact: {
    email: "mohamed@example.com",
    phone: {
      home: "02-1234567",
      mobile: "01012345678",
    },
  },
};
flattenObject(person, "");
