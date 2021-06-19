/**
 *
 * #1 返回一个函数
 * #2 可以给返回的函数 预设参数
 * #3 如果返回函数作为构造函数
 *     返回一个使用此函数作为构造函数的对象， 使用 new 关键字
 */
Function.prototype.myBind = function (_context, ...rest) {
  let fn = this;
  return function () {
    let args = rest.concat([...arguments]);
    if (this instanceof fn) {
      return new fn(...args);
    }
    return fn.apply(_context, args);
  };
};
