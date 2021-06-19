/**
 call 的主要目的是实现 `obj.fn()`   fn 内的 this 就会变更为 obj

- 获取调用 call 的函数 `let fn = this`
- 获取 call() 中的参数   `newThis`     `arguments`
- 调用 newThis.fn()
 */

Function.myCall = function(_context, ...rest) {
  let fn = this;
  if (!_context) {
    _context = window
  }
  _context.fn = fn;
  const result = _context.fn(...rest);
  delete _context.fn;
  return result
}