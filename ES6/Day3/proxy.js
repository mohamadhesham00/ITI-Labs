let person = {
  name,
  address,
  age,
};
let handler = {
  set(obj, prop, value) {
    if (prop == "name" && (typeof value !== "string" || value.length > 7)) {
      throw new Error(`name is invalid`);
    }
    if (prop == "address" && typeof value !== "string") {
      throw new Error(`address is invalid`);
    }
    if (
      prop == "age" &&
      (typeof value !== "number" || value < 25 || value > 60)
    ) {
      throw new Error(`Number is invalid`);
    }

    if (typeof value === "string" && value.length > 20) {
      throw new RangeError(`Property "${prop}" must be 20 characters or less.`);
    }

    obj[prop] = value;
    return true;
  },
};

let personProxy = new Proxy(person, handler);
