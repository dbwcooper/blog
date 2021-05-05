import React, { useLayoutEffect, useRef, useState } from "react";

/**
 * componentDidUpdate：
 * #1 组件render之后 渲染到真实dom之前执行。
 * #2 组件初初始化时不执行
 */
const useDidUpdate = (fn: any) => {
  const ref = useRef(true);
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current = false;
    } else {
      fn();
    }
  });
};
export default function App() {
  const [count, setCount] = useState(0);
  useDidUpdate(() => {
    console.log("useDidUpdate: ");
  });
  return (
    <div>
      <div>count: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>add</button>
      </div>
    </div>
  );
}
