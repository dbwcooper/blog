import React, { useState, useCallback, useMemo } from "react";

const Child = (props: any) => {
  console.log("Child: render");
  return (
    <div>
      <div>count: {props.data.count}</div>
      <button onClick={props.onClick}>add</button>
    </div>
  );
};
// useMemo 记忆组件
export default function App() {
  const [data, setCount] = useState({ count: 0 });
  const onClickCb = useCallback(() => {
    setCount((data) =>
      data.count >= 10 ? { count: 10 } : { count: data.count + 1 }
    );
  }, []);
  const c = useMemo(
    () => <Child data={{ count: data.count }} onClick={onClickCb} />,
    [data.count]
  );
  return <div>{c}</div>;
}
