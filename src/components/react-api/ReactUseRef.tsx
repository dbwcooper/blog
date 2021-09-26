import React, { useRef, useEffect, useState } from "react";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
}
