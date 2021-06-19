// https://zhuanlan.zhihu.com/p/38313717

// Throttle 节流函数
// 特点：在特定时间内，最多执行一次 func 的函数
// 场景：如果监听鼠标位置，在 20ms 内获取鼠标位置

/**
 * 1. 基础实现
 * 接受两个参数
 *  #1 fn： 将要执行的函数
 *  #2 options:
 *     1. number: 为 setTimeout 的延迟时间
 *     2. object: {
 *         wait: 1000,
 *       }
 *
 * 2. 处理 this 和原函数的传参
 */

function throttle(fn, options) {
  let timer = null;
  let wait = typeof options === "number" ? options : options.wait;
  let startDate = new Date();

  return function (...args) {
    let _context = this;
    let currentDate = new Date();
    clearTimeout(timer);

    if (currentDate - startDate >= wait) {
      fn.apply(_context, args);
      startDate = currentDate;
    }

    timer = setTimeout(() => {
      fn.apply(_context, args);
    }, wait);
  };
}

function mousemove() {
  console.log("mousemove");
}
let mousemoveThrottle = throttle(mousemove, 1000);
document.addEventListener("mousemove", mousemoveThrottle);
