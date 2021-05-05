import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(() => {
    // 这里定义 constructor
    return 0;
  });
  return <div>App</div>;
}
