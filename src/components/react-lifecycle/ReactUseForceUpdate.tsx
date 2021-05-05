import React, { useReducer, useState } from "react";

const useForceUpdate = () => {
  const [s, dispatch] = useReducer((x) => x + 1, []);
  return dispatch;
};

const useForceUpdate2 = () => {
  const [, setCount] = useState(0);
  return () => setCount((c) => c + 1);
};
export default function App() {
  const update = useForceUpdate();
  const update2 = useForceUpdate2();
  return (
    <div>
      <div>Date: {Date.now()}</div>
      <div>
        <button onClick={update2}>update</button>
      </div>
    </div>
  );
}
