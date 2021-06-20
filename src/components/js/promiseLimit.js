// 真实面试题
// 参考 https://www.notion.so/Promise-d1881252f16c4bb495d13cc8ce1fadad
let delayFn = (count) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (count === 10) {
        reject(count);
      } else {
        resolve(count);
      }
    }, count * 1000);
  });

let testFunc = () => {
  let count = 10;

  let i = 0; // 标志位： 判断是否结束
  let poolLimit = 3; // 最大并发数量
  let executingList = []; // 当前正在执行的 promise 数组
  let taskList = []; // 所有的 task 任务

  let queue = () => {
    if (i >= count) {
      return Promise.resolve();
    }
    i++;
    console.log("i: ", i);
    // 根据传入数组，生成一个 promise 任务 并放入 executingList。
    // #1 create a promise task
    // #2 将此 task 放入执行 数组中
    // #3 此 task 执行完成之后再 executingList 中删除自己。

    let task = Promise.resolve().then(() => delayFn(i));
    let executingTask = task.then(() => {
      executingList.splice(executingList.indexOf(executingTask), 1);
    });
    taskList.push(task);
    executingList.push(executingTask);

    let r = Promise.resolve();
    if (executingList.length >= poolLimit) {
      // 如果 executingList 中的任务数量 >= poolList
      // 等待一个 promise 先完成，再执行生成一个 promise 并放入 executingList 中
      r = Promise.race(executingList);
    }
    return r.then(queue);
  };
  return queue().then(() => Promise.all(taskList));
};

// TODO: 待处理
// #1 某个 promise 返回失败的情况
// #2 传入自定义函数 delayFn； 