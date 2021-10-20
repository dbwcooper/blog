let fetch = (count = 1) => {
  let startTime = new Date().getTime();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let date = new Date().getTime() - startTime;
      resolve(date);
    }, count * 2000);
  });
};

const TASK_STATUS = {
  pending: 'pending',
  resolved: 'resolved',
  done: 'done',
  aborted: 'aborted',
};
class HttpClient {
  constructor(config = {}) {
    this.poolLimit = config.concurrency || 2;

    this.storeURI = [
      // {
      //   url: ''
      // }
    ];

    this.pointIndex = 0;
    // 存储 正在执行的 task
    this.executingTask = [];

    // 暂存task 的结果。
    this.storeTaskResults = [
      // Promise.resolve()
    ];
  }

  setAborted(uriIndex) {
    this.storeTaskResults[uriIndex].status = TASK_STATUS.aborted;
    this.resolveAsOrder();
  }

  resolveAsOrder() {
    let storeTaskResults = this.storeTaskResults;

    for (let i = 0; i < storeTaskResults.length; i++) {
      const result = storeTaskResults[i] || {};

      const isBreak = result.status === TASK_STATUS.pending || !result.status;

      // 丢弃 promise 结果。
      if (result.status === TASK_STATUS.abort) {
        result.reject('abort');
      }

      if (result.status === TASK_STATUS.done) {
        result.status = TASK_STATUS.resolved;
        this.storeTaskResults[result.pointIndex] = result;

        result.resolve(result.data);
      }

      if (isBreak) {
        break;
      }
    }
  }

  queue() {
    let pointIndex = this.pointIndex;
    // 所有 uri 都已经转换为 promise 任务
    let isComplete = pointIndex >= this.storeURI.length;
    // 同时执行的 promise 任务已经达到最大限制
    let isLimit = this.executingTask.length >= this.poolLimit;

    if (isComplete || isLimit) return;

    let uri = this.storeURI[pointIndex];

    let taskResult = {
      ...uri,
      data: null,
      status: TASK_STATUS.pending, // pending | done
      pointIndex,
    };
    let task = fetch(uri.url).then((data) => {
      // 移除已经完成的 task
      this.executingTask.splice(this.executingTask.indexOf(task), 1);

      if (this.storeTaskResults[pointIndex].status === TASK_STATUS.pending) {
        this.storeTaskResults[pointIndex].data = data;
        this.storeTaskResults[pointIndex].status = TASK_STATUS.done;

        // 按照时序输出
        this.resolveAsOrder();
      }
    });
    this.storeTaskResults[pointIndex] = taskResult;
    this.executingTask.push(task);

    let r = Promise.resolve();
    if (this.executingTask.length >= this.poolLimit) {
      r = Promise.race(this.executingTask);
    }

    r.then(() => {
      this.pointIndex++;
      this.queue();
    });
  }

  get(url) {
    let abort = () => {};
    let r = new Promise((resolve, reject) => {
      const uri = {
        url,
        resolve,
        reject,
      };
      this.storeURI.push(uri);
      // 设置 abort
      let uriIndex = this.storeURI.length - 1;
      abort = () => this.setAborted(uriIndex);

      setTimeout(() => {
        this.queue();
      });
    });

    r.abort = abort;
    return r;
  }
}

let h = new HttpClient({ concurrency: 2 });

// 测试并发控制: h 一次性只能同时发起两个请求
// 测试时序: 输出顺序 1，2，3，4

// h.get(2).then((time) => {
//   console.log('1: ', time);
// });
// h.get(1).then((time) => {
//   console.log('2: ', time);
// });
// h.get(3).then((time) => {
//   console.log('3: ', time);
// });
// h.get(4).then((time) => {
//   console.log('4: ', time);
// });

// 测试 abort: 不输出 2

// let r = h.get(2);
// r.then((time) => {
//   console.log('2: ', time);
// });

// h.get(1).then((time) => {
//   console.log('1: ', time);
// });

// setTimeout(() => {
//   r.abort();
// }, 1000);
