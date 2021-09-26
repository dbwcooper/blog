// Debounce 延迟执行函数
// 特点：该函数会在上一次被调用后，延迟 wait 毫秒后执行。
// 场景：Input Scroll Resize 等

/**
 * 1. 基础实现
 * 接受两个参数
 *  #1 fn： 将要执行的函数
 *  #2 options:
 *     1. number: 为 setTimeout 的延迟时间
 *     2. object: {
 *         wait: 1000,
 *         immediate: true
 *       }
 *
 * 2. 处理 this 和原函数的传参
 */

function debounce(fn, options) {
  let timer = null;
  let delay = 0;
  let immediate = false;

  if (typeof options === 'number') {
    delay = options;
  }
  if (options && typeof options === 'object') {
    delay = options.delay;
    immediate = options.immediate;
  }

  function debounceImp() {
    let _context = this;
    let args = [...arguments];
    clearTimeout(timer);
    if (immediate) {
      fn.apply(_context, args);
    } else {
      timer = setTimeout(function () {
        fn.apply(_context, args);
      }, delay);
    }
  }
  return debounceImp;
}

function test(arg) {
  console.log('arg: ', arg);
}

function getName() {
  return this.name;
}
