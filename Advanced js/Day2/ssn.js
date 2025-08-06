function person() {
  var ssn;
  this.getSSN = function () {
    return ssn;
  };
  Object.defineProperty(this, "ssnHandler", {
    set: function (value) {
      ssn = value;
    },
  });
}

var p1 = new person();
p1.ssnHandler = "1111";
console.log(p1.getSSN());
