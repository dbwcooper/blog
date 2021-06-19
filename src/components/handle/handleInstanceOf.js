// 判断 第一个参数的 __proto__ 是否等于第二个参数的 prototype
function myInstanceOf(obj, parent) {
  let typeOfArray = [
    "number",
    "function",
    "boolean",
    "object",
    "symbol",
    "undefined",
  ];
  if (typeOfArray.includes(typeof obj) || obj === null) {
    return false;
  }

  let L = obj.__proto__;
  let R = parent.prototype;
  while (R !== null) {
    if (L === R) return true;
    if (R) R = R.__proto__;
    else return false;
  }
}
