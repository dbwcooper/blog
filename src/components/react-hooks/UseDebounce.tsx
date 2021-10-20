import React, {
  useCallback,
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
} from 'react';

// https://zhuanlan.zhihu.com/p/134675915
function useDebounce(fn, time) {
  const ref = useRef({ fn, timer: null });

  useEffect(() => {
    ref.current.fn = fn;
  });
  return useCallback(
    function (...args) {
      let _context = this;
      if (ref.current.timer) {
        clearTimeout(ref.current.timer);
      }

      ref.current.timer = setTimeout(() => {
        ref.current.fn.call(_context, ...args);
        clearTimeout(ref.current.timer);
      }, time);
    },
    [ref.current.fn]
  );
}

function Demo1({ count }) {
  const [counter, setCounter] = useState(0);

  const handleClick = useDebounce(function () {
    setCounter(counter + 1);
  }, 5000);

  useEffect(() => {
    console.log('didmount: ', count);
    return () => {
      console.log('willunmount: ', count);
    };
  }, []);

  return (
    <div style={{ padding: 30, border: '1px solid green' }}>
      <h5> case1</h5>
      <p>延迟 1s 执行</p>
      <button onClick={handleClick}>click</button>
      <div>{counter}</div>
    </div>
  );
}

function Demo2() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleClick = useDebounce(function () {
    console.count('click1');
    setCounter1(counter1 + 1);
  }, 500);

  useEffect(function () {
    const t = setInterval(() => {
      setCounter2((x) => x + 1);
    }, 500);
    return clearInterval.bind(undefined, t);
  }, []);

  return (
    <div style={{ padding: 30, border: '1px solid green' }}>
      <h5>case2</h5>
      <button onClick={handleClick}>click</button>
      <div>{counter1}</div>
      <div>{counter2}</div>
    </div>
  );
}

export default function () {
  // test: batch update
  const [count, setCount] = useState(0);
  useEffect(function () {
    setTimeout(() => {
      setCount(count + 1);
      console.log('count1: ', count);
      setCount(count + 1);
      console.log('count2: ', count);
    }, 1000);
  }, []);

  useLayoutEffect(() => {
    console.log('commit', count);
  });

  const onAdd = useCallback(() => {
    setCount((count) => count + 1);
    console.log('count: ', count);
  }, []);
  console.log('render', count);
  return (
    <div>
      <button onClick={onAdd}>add</button>
      <div>count: {count}</div>
      <Demo1 key={count} count={count} />
      <Demo2 />
    </div>
  );
}

function output(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(i);
    }, i);
  }).then(() => {
    console.log(i);
  });
}

let arr = [];
for (var i = 0; i < 5; i++) {
  arr.push(output(i));
}

Promise.all(arr).then(() => {
  console.log(i);
});
// 输出结果
