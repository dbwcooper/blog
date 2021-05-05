import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * componentWillUnMount
 * #1 组件将要卸载时触发
 */
const useWillUmMount = (fn: any) => {
  useEffect(() => {
    return () => {
      // componentWillUnMount
      fn();
    };
  });
};
export default function App() {
  const [count, setCount] = useState(0);
  useWillUmMount(() => {
    console.log("useWillUmMount: ");
  });
  console.log("count: ", count);
  return (
    <div>
      <div>count: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>add</button>
      </div>
    </div>
  );
}
