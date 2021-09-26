import React, { useState, useCallback, useMemo } from "react";

const Child = (props: any) => {
  console.log("Child: render");
  return (
    <div>
      <div>count: {props.count}</div>
      <button onClick={props.onClick}>add</button>
    </div>
  );
};
// 记忆函数
export default function App() {
  const [count, setCount] = useState(0);
  const onClickCb = useCallback(() => {
    setCount((count) => (count >= 10 ? 10 : count + 1));
  }, []);
  // 避免每次重新生成 onClick 函数
  // const onClick = () => {
  //   setCount(count + 1);
  // };
  return (
    <div>
      <Child onClick={onClickCb} count={count} />
    </div>
  );
}
