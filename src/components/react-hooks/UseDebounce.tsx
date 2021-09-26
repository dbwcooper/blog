import React, { useCallback, useRef, useEffect, useState } from 'react';

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

function Demo1() {
  const [counter, setCounter] = useState(0);

  const handleClick = useDebounce(function () {
    setCounter(counter + 1);
  }, 1000);

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
  return (
    <div>
      <Demo1 />
      <Demo2 />
    </div>
  );
}
