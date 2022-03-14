function for1() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log("i: ", i);
    }, i * 1000);
  }
}

// for1();
/**
 * output:
 * 5
 * 5
 * 5
 * 5
 * 5
 */

// 有两种方式让这个循环打印 0 1 2 3 4
// 1. 使用块作用域特点，让 for 每次循环时都重新声明变量 i
// 2. 使用闭包
// answer 1
function for2() {
  for (var i = 0; i < 5; i++) {
    let j = i;
    setTimeout(() => {
      console.log("i: ", j);
    }, j * 1000);
  }
}

for2();

// answer 2： 与 answer 1 一样，都是利用 let，在每次for 循环时，在 for {} 中重新定义 i 的值，
function for2() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log("i: ", i);
    }, i * 1000);
  }
}

for2();

// 使用闭包， 立即执行函数
function for3() {
  for (var i = 0; i < 5; i++) {
    (function (i) {
      setTimeout(() => {
        console.log("i: ", i);
      }, i * 1000);
    })(i);
  }
}

for3();

// 延伸题

function fooExtends() {
  function delay(i) {
    return Promise.resolve().then(() => {
      setTimeout(() => {
        console.log("i: ", i);
      }, i * 1000);
    });
  }
  for (let i = 0; i < 5; i++) {
    delay(i);
  }
}

fooExtends();

async function fooExtends2() {
  function delay(i) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve(i);
      }, 1000);
    });
  }
  for (let i = 0; i < 5; i++) {
    await delay(i);
    console.log("i: ", i);
  }
}

fooExtends2();
