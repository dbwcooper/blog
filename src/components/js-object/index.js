// 定义常量的两种方式

// #1 es6
const a = 0;

// #2

var constObj = {};
Object.defineProperty(constObj, "name", {
  value: "Tom",
  writable: false, // 不允许修改属性值
  // configurable: false, // 不允许增加，删除属性
  // enumerable: false, // 不允许枚举
});

console.log(constObj);

const object1 = {};

Object.defineProperty(object1, "property1", {
  value: 42,
  writable: false,
});
console.log(object1);
// expected output: 42
