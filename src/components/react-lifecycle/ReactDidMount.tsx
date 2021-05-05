import React, { useLayoutEffect } from "react";

const useDidMount = (fn: Function) => {
  useLayoutEffect(() => {
    fn();
  }, []);
};
/**
 * componentDidMount：组件渲染到真实dom之后再执行。
 */
export default function App() {
  useDidMount(() => {
    console.log("useDidMount: ");
  });
  return <div>App</div>;
}
