// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop
// https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth
// https://zhuanlan.zhihu.com/p/33058983
// https://zhuanlan.zhihu.com/p/80416656

// 栈
// #1 栈的执行顺序是 先进后出

// 堆
// #1 对象被分配在堆中

// 事件循环
// #1 消息队列（Message Channel）的执行顺序是 先进先出
// #2 执行完一个消息时，此 Message 立即被移除消息队列
//    同时，开始处理此 Message 的回调函数，此操作会在栈中创建 回调函数调用帧 等待处理
// #2 只有上一个消息的回调函数执行完毕之后，才能执行下一个消息

// ### 消息队列中的执行顺序是同步的。
//     并且只有上一个消息的回调函数被执行完毕，next message 才会被执行

// example
// 点击 click 之后
// 立即执行移动鼠标，mousemove 回调函数不会立即执行
// 因为 此时 click 回调函数未执行完成
document.addEventListener("mousemove", () => {
  console.log("mousemove", new Date());
});

document.addEventListener("click", () => {
  let count = 1;
  let total = 10000000;
  let map = new Map();

  while (count < total) {
    count++;
    map.set(count, count);
  }
  console.log("click " + count, new Date());
});

// 添加消息到消息队列的方式： setTimeout
// 第一个参数 回调函数 fm
// 第二个参数 wait 决定了延迟多少毫秒将 fn 添加在消息队列中。
// wait 并不是执行 fn 准确的延迟时间，
//  实际执行时间要看 fn 在消息队列中的顺序，以及 prev message 的执行时间。

(function () {
  console.log("这是开始");

  setTimeout(function cb() {
    console.log("这是来自第一个回调的消息");
  });

  console.log("这是一条消息");

  setTimeout(function cb1() {
    console.log("这是来自第二个回调的消息");
  }, 0);

  console.log("这是结束");
})();

// 事件循环过程
// #1 函数调用栈帧处理
//     挂起：异步任务
//     执行同步任务
// #2 异步任务有返回值了：
//     添加 将要执行此异步函数的 message 到 MessageChannel
//     等待 添加的message 被执行
// #3 message 执行
//     添加此函数调用帧到栈中处理 按照 #1

// https://developer.mozilla.org/zh-CN/docs/Web/API/HTML_DOM_API/Microtask_guide
// 异步任务有哪些，优先级是怎样的
// #1 宏任务
//    setTimeout
//    setInterval
// #2 微任务
//    Promise
//    MutaionObserver

// 同一个事件循环中的优先级：微任务 > 宏任务

console.log(1);

//setTimeout1
setTimeout(function () {
    console.log(2);
    Promise.resolve().then(function () {
      console.log(21)
    }).then(function () {
      console.log(22)
    })
}, 0);

//setTimeout2
setTimeout(function () {
    console.log(3);
    //setTimeout3
    setTimeout(function () {
        console.log(4);
    });
    Promise.resolve().then(function () {
        console.log(5);
    });
}, 200);

//Promise1
Promise.resolve().then(function () {
    console.log(6);
}).then(function () {
    console.log(7);
});

//Promise2
Promise.resolve().then(function () {
    console.log(8);
});

console.log(9);
// 执行顺序
// --- // 主进程上的 同步任务
// 1 
// 9
// --  // 主进程上的异步任务： 微任务 Promise
// 6 
// 8
// 7 // 因为微任务直接就有返回值，所以再次添加 message 到微任务 MessageChannel
// -- // 主进程上的异步任务： 宏任务 setTimeout
// 2
// 21 
// 22
// -- // 主进程上的异步任务： 宏任务 setTimeout 需要等待上一个宏任务执行完毕
// 3
// 5
// -- // setTimeout
// 4

