### Promise 解决了哪些问题

- 回调地狱常见于 Nodejs 的 Api `fs.readFile` `fs.writeFile`
- 提供了常用的 并发模式 Api `Promise.all`

### Promise 对象的主要特点

- 状态
  > - pending, Promise 对象的初始状态
  > - fulfilled, Promise 对象 操作成功的状态
  > - rejected, Promise 对象 操作失败的状态
- then

  > - 返回一个新的 Promise 对象
  > - 可以链式调用
  > - 值穿透特性
  > - then 方法内返回新的的 Promise 对象

  ```js
  // 返回 Promise， 可以链式调用then
  new Promise().then().then();
  ```

  ```js
  // 值穿透
  new Promise((resolve, reject) => {
    resolve(1);
  })
    .then()
    .then((data) => {
      console.log(data); // 1
    });
  ```

### 编写 Promise 的步骤

- 实现同步的 Promise

  ```ts
  class Promise {
    constructor(executor) {
      this.status = 'pending';
      this.value = undefined;
      this.reason = undefined;

      let resolve = (value) => {
        if (this.status === 'pending') {
          this.status = 'fulfilled';
          this.value = value;
        }
      }
      let reject = (value) => {
        if (this.status === 'pending') {
          this.status = 'rejected';
          this.reason = value;
        }
      }

      try {
        executor(resolve, reject)
      } catch ((e) => {
        reject(e)
      })
    }

    then = (onFulfilled, onRejected) => {

      if (this.status === 'fulfilled') {
        let x = onFulfilled(this.value);
        return x;
      }
      if (this.status === 'rejected') {
        let x = onFulfilled(this.value);
        return x;
      }

      if (this.status === 'pending') {
        // 异步
      }
    }
  }
  ```

- 支持异步

  - > 暂存 onFulfilled/onRejected 函数

  ```ts
  const FULFILLED = 'fulfilled';
  const REJECTED = 'rejected';
  const PENDING = 'pending';
  /**
  - 状态 pending|fulfilled|rejected
  - resolve/reject
  - then
  */
  class Promise {
    status: string;
    value: any; // resolve return
    reason: any; // reject return

    onResolveCallbacks: any; // 暂存异步之后需要执行的动作
    onRejectCallbacks: any;

    constructor(executor: any) {
      this.status = PENDING;
      this.value = null;
      this.onResolveCallbacks = [];
      this.onRejectCallbacks = [];
      let resolve = (value: any) => {
        if (this.status === PENDING) {
          this.status = FULFILLED;
          this.value = value;
          this.onResolveCallbacks.forEach((fn: any) => fn(this.value));
        }
      };
      let reject = (reason: any) => {
        if (this.status === PENDING) {
          this.status = FULFILLED;
          this.value = reason;
          this.onRejectCallbacks.forEach((fn: any) => fn(this.value));
        }
      };

      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }

    then = (onFulfilled?: any, onRejected?: any) => {
      onFulfilled =
        typeof onFulfilled === 'function' ? onFulfilled : (y: any) => y;
      onRejected =
        typeof onRejected === 'function' ? onRejected : (y: any) => y;

      if (this.status === FULFILLED) {
        let x = onFulfilled(this.value);
        return x;
      }
      if (this.status === REJECTED) {
        let x = onRejected(this.reason);
        return x;
      }

      if (this.status === PENDING) {
        this.onResolveCallbacks.push(() => {
          onFulfilled(this.value);
        });
        this.onResolveCallbacks.push(() => {
          onRejected(this.reason);
        });
      }
    };
  }
  ```

- then 支持链式调用

  - > 每个 then 方法都返回 promise 对象
  - > 只需要改造 then 方法

  ```ts
  then = (onFulfilled?: any, onRejected?: any) => {
    onFulfilled =
      typeof onFulfilled === 'function' ? onFulfilled : (y: any) => y;
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : () => {
            throw new Error('Uncaught');
          };
    if (this.status === FULFILLED) {
      return new Promise((resolve: any, reject: any) => {
        try {
          let x = onFulfilled(this.value);
          resolve(x);
        } catch (error) {
          reject(error);
        }
      });
    }
    if (this.status === REJECTED) {
      return new Promise((resolve: any, reject: any) => {
        try {
          let x = onRejected(this.reason);
          resolve(x);
        } catch (error) {
          reject(error);
        }
      });
    }

    if (this.status === PENDING) {
      return new Promise((resolve: any, reject: any) => {
        try {
          this.onResolveCallbacks.push(() => {
            try {
              let x = onFulfilled(this.value);
              resolve(x);
            } catch (error) {
              reject(error);
            }
          });
          this.onRejectCallbacks.push(() => {
            try {
              let x = onRejected(this.reason);
              resolve(x);
            } catch (error) {
              reject(error);
            }
          });
        } catch (error) {
          reject(error);
        }
      });
    }
  };
  ```

- then 方法支持内部返回 promise

  - > 即是 `onFulfilled` `onRejected` 方法返回 Promise
  - > 内部返回的 promise 执行之后，再继续执行外部 `then` 方法
  - 这里将 then 的返回值抽出来，用一个函数包装内部逻辑

  ```js
  let x = onFulfilled(this.value); // 如果 x 返回 promise 对象

  let resolvePromise = (promise, x, resolve, reject) => {
    // 判断x 是否是 promsie
    try {
      if (
        typeof x !== null &&
        (typeof x === 'function' || typeof x === 'object')
      ) {
        let then = x.then;
        if (typeof then === 'function') {
          then.call(
            promise,
            (value) => {
              // resolve(x)
              // 如果 then 仍然是一个promise
              resolvePromise(promise, value, resolve, reject);
            },
            (e) => {
              reject(e);
            }
          );
        }
      } else {
        return resolve(x);
      }
    } catch (e) {
      reject(e);
    }
  };
  ```
