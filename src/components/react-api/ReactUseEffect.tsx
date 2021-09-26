import React, { useEffect, useRef, useState } from "react";

let timer: number;
export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    timer = setInterval(() => {
      setCount((o) => o + 1);
    }, 1000);

    // 将在当前组件卸载时触发
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  useEffect(() => {
    document.title = `count = ${count}`;
  }, [count]);

  return <div>use effect</div>;
}

const DidUpdate = (fn: Function) => {
  let ref = useRef(true);
  useEffect(() => {
    if (ref.current) {
      // 组件第一次挂载，=== componentDidMount
      ref.current = false;
    } else {
      // componentDidUpdate
      fn();
    }
  });
};
