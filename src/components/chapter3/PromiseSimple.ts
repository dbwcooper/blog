const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
const PENDING = 'pending';

/**
 * 状态 pending|fulfilled|rejected
 * resolve/reject
 * then
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
        
        this.onResolveCallbacks.forEach((fn: any) => fn(this.value))
      }
    };

    let reject = (reason: any) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = reason;
        this.onRejectCallbacks.forEach((fn: any) => fn(this.value))
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
    onRejected = typeof onRejected === 'function' ? onRejected : (y: any) => y;

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
export default Promise;
