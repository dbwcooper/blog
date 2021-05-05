import React, { useCallback, useRef } from "react";

/**
 * debounce函数特点
 * 接受两个参数：函数， 时间
 */

const debounce = (fn: Function, time: number) => {
  let timer: any = null;
  return () => {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, time);
  };
};

export default () => {
  const click = () => {
    console.log("1", Date.now());
  };
  return (
    <div>
      <div>app</div>
      <button onClick={debounce(click, 1000)}>update</button>
    </div>
  );
};
