import React, { useEffect, useLayoutEffect, useState } from "react";

function App() {
  const [state, setState] = useState("hello world");

  // 页面先出现 hello world 再出现 world hello
  // useEffect(() => {
  //   setState("world hello");
  // }, []);

  useLayoutEffect(() => {
    setState("world hello");
  }, []);

  return (
    <>
      <div>{state}</div>
    </>
  );
}

export default App;
