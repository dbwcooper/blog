var obj = {
  get name() {
    return "Tom";
  },

  set name(value) {
    this._name_ = value;
  },
};
obj.name = "Bob";
console.log("obj: ", obj.name);

Object.defineProperty(obj, "name", {
  enumerable: false,
});

console.log("in", "name" in obj); // true
console.log("in", obj.hasOwnProperty("name")); // true

for (const key in obj) {
  console.log(key, obj[key]); // _name_  Bob
}

let arr = [];
for (const key in arr) {
  console.log("arr key: ", key);
}
