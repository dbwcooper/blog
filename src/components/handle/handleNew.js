/**
 * 
- 定义一个对象 obj
- 对象的 **proto** 指向 函数对象的 prototype
- 调用call/apply 将this 指向为 obj
 */
function myNew(_constructor, ...rest) {
  let obj = {};
  obj.__proto__ = _constructor.prototype;
  _constructor.apply(obj, rest);
  return obj;
}
