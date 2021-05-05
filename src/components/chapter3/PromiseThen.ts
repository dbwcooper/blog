const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
const PENDING = 'pending';

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
 */
class Promise {
  status: typeof FULFILLED | typeof PENDING | typeof REJECTED;
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
        this.status = REJECTED;
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
}
export default Promise;
