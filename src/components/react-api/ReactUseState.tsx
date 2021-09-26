import React, { useState } from "react";
import Refs from "./ReactRefs";

export default function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(() => 0);
  console.log("count, count1 : ", count, count1);
  const [person, setPerson] = useState({
    age: 1,
    name: "tom",
  });
  return (
    <div>
      <div>useState {count}</div>
      <div>useState callback {count1}</div>
      <button onClick={() => setCount(count + 1)}>add</button>
      <button onClick={() => setCount1(count1 + 1)}>add callback</button>
      <div style={{ marginTop: 16 }} />
      <div>
        <div>
          <span>name: </span>
          <input
            value={person.name}
            onChange={(e) => {
              const value = e.target.value;
              // setPerson 是覆盖式更新，如果不 ...person, age属性将会丢失
              setPerson({
                ...person,
                name: value,
              });
            }}
          />
        </div>
        <div>
          age:
          <input
            value={person.age}
            onChange={(e) => {
              const value = e.target.value;
              setPerson({
                ...person,
                age: Number(value),
              });
            }}
          />
        </div>
      </div>
      <Refs />
    </div>
  );
}
