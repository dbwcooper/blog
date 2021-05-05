import React, { useEffect, useRef, forwardRef } from "react";

const AutoFocusInput = () => {
  const InputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (InputRef) {
      InputRef.current?.focus();
    }
  }, []);
  return <input ref={InputRef} value="自动聚焦" />;
};

const ForwardRefInput = forwardRef((props, ref: any) => (
  <input placeholder="forwarf ref" {...props} ref={ref} />
));

function App() {
  console.log("Refs: ");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef) {
      inputRef.current?.focus();
    }
  }, []);
  return (
    <div>
      {/* <AutoFocusInput /> */}
      {"1".map((i) => i)}
      <ForwardRefInput ref={inputRef} />
    </div>
  );
}
export default App;
