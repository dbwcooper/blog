// 柯里化函数：
// 将函数参数分组，让它一次只处理一部分参数，并返回一个新的函数处理剩余参数

// #1 multi(2)(3)(4)
function mutli(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

// #2 柯里化实现
function mutli(a, b, c) {
  return a * b * c
}

function _curreny(fn, ...args) {
  let len = fn.length; // 函数参数列表

  if (args.length >= len) {
    return fn(...args)
  }
  return function () {
    let r_args = [...arguments];
    let a_args = args.concat(r_args)
    return _curreny.call(this, fn, ...a_args)
  }
}

// 不限定函数参数的 mutli 函数
function mutli() {
  let args = [...arguments];
  let fn = function () {
    return mutli.apply(this, args.concat([...arguments]))
  };

  fn.toString = function () {
    return args.reduce((a, b) => {
      return a * b;
    })
  }
  return fn
}

