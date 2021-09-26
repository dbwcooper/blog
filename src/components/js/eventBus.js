class EventEmitter {
  constructor() {
    this._events = new Map();
    this._maxListeners = this._maxListeners || 10;
  }
}
EventEmitter.prototype.emit = function (type, ...args) {
  const handlers = this._events.get(type);
  while (handlers && handlers.length > 0) {
    handlers.pop().call(this, ...args);
  }
  return true;
};
EventEmitter.prototype.addEventListener = function (type, fn) {
  const handlers = this._events.get(type);
  if (Array.isArray(handlers)) handlers.push(fn);
  // 处理多个 listener 的情况
  else this._events.set(type, [fn]); // 只有一个监听事件。
};

let emitter = new EventEmitter();
emitter.addEventListener('test', (text) => console.log('start', text));
emitter.addEventListener('test', (text) => console.log('end', text));
emitter.emit('test', 'Tom');
