const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
const PENDING = 'pending';

const resolvePromise = (promise2: any, x: any, resolve: any, reject: any) => {
  // TODO: why
  if (promise2 === x) {
    return reject(
      new TypeError('Chaining cycle detected for promise #<Promise>')
    );
  }
  //
  let called: boolean = false;
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    try {
      // TODO: why
      let then = x.then;
      if (typeof then === 'function') {
        then.call(
          x,
          (y: any) => {
            // resolve(resolveValue);
            // 如果 then 内部再返回 promise 对象
            called = true;
            // 递归解析
            resolvePromise(promise2, y, resolve, reject);
          },
          (r: any) => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      // 返回的是 对象
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    // 返回基础值
    resolve(x);
  }
};

/**
 * 状态 pending|fulfilled|rejected
 * resolve/reject 构造函数参数
 * then (链式调用)
 *  需要返回 promise
 *  resolve -> 下一个then onFulfilled -> 下一个then onFulfilled -> ................
 *  reject -> 下一个then onRejected -> 下一个then onFulfilled ->  下一个then onFulfilled -> .....
 *         -> catch (如果下个then 没有 onRejected)
 *         -> 外部报错 (如果没有 catch)
 *
 * onFulfilled/onRejected 方法内返回一个 新的 promise 对象 x
 *   使用当前 promise 对象的 resolve/reject 接管 x 的 resolve/reject 返回值
 */
class Promise {
  status: string;
  value: any; // resolve return
  reason: any; // reject return
  onResolveCallbacks: any; // 暂存异步之后需要执行的动作
  onRejectCallbacks: any;

  constructor(
    executor: (arg1: (value: any) => any, arg2: (v: any) => any) => void
  ) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolveCallbacks = [];
    this.onRejectCallbacks = [];

    try {
      executor(this.resolve, this.reject);
    } catch (error) {
      this.reject(error);
    }
  }

  then(onFulfilled: any, onRejected: (arg: any) => any) {
    // 判断 未传 onFulfilled, onRejected 函数的情况
    onFulfilled =
      typeof onFulfilled === 'function' ? onFulfilled : (y: any) => y;
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : () => {
            throw this.reason || new Error('Uncaught');
          };
    // 每次调用 then 都返回 一个新的 Promise
    let promise2 = new Promise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            // 考虑 x 是promise的情况，
            resolvePromise(promise2, x, resolve, reject);
            // resolve(x);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            // resolve(x);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.status === PENDING) {
        this.onResolveCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              // 考虑 x 是promise的情况，
              resolvePromise(promise2, x, resolve, reject);
              // resolve(x);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });

        this.onRejectCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              // resolve(x);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });
    return promise2;
  }

  catch = (onError: any) => {
    return this.then(null, onError);
  };

  resolve = (value: any) => {
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      this.onResolveCallbacks.forEach((fn: any) => fn());
    }
  };

  reject = (reason: any) => {
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      this.onRejectCallbacks.forEach((fn: any) => fn());
    }
  };
}
export default Promise;
