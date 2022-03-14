// extends

function Animal(name) {
  this.name = name;
}
Animal.prototype.sayName = function () {
  return " my name is " + this.name;
};

// extends ===
// #1 调用 parent 函数
// #2 关联 parent 的 prototype
function Cat(name, age) {
  Animal.call(this, name);
  this.age = age;
}

Object.setPrototypeOf(Cat.prototype, Animal.prototype);
// Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.sayAge = function () {
  return " my age is " + this.age;
};

let tom = new Cat("tom", 2);
tom.sayAge();
tom.sayName();
