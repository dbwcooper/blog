import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";

let FancyInput = (props: any, ref: any) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log("FancyInput focus: ");
      inputRef.current?.focus();
    },
  }));
  return <input ref={inputRef} />;
};

FancyInput = forwardRef(FancyInput) as any;

export default function App() {
  const inputRef = useRef<any>(null);
  useEffect(() => {
    console.log("focus: ");
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <FancyInput ref={inputRef} />
    </div>
  );
}
