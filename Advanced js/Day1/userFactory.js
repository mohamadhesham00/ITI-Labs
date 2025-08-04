function admin(_name) {
  this.name = _name;
}
admin.prototype.manageUsers = function () {
  console.log(`${this.name} is managing users`);
};

function user(_name) {
  this.name = _name;
}
user.prototype.viewContent = function () {
  console.log(`${this.name} is viewing content`);
};

function createUser(obj) {
  var type = obj.type;
  var name = obj.name;
  if (type == "Admin") {
    return new admin(name);
  } else {
    return new user(name);
  }
}

var adminUser = createUser({ type: "Admin", name: "Alice" });
adminUser.manageUsers();
var guestUser = createUser({ type: "User", name: "Bob" });
guestUser.viewContent();
