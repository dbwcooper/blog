import React, { useState, createContext, useContext, useReducer } from "react";

const blueTheme = {
  type: "blue",
  bgColor: "blue",
};

const redTheme = {
  type: "red",
  bgColor: "red",
};

const dispatchType = (a: any) => {};

const ThemeDispatch = createContext(dispatchType);

const themeReducer = (state: any, action: { type: string }) => {
  switch (action.type) {
    case "blue":
      return blueTheme;
    case "red":
      return redTheme;
    default:
      return redTheme;
  }
};

const Child = (props: any) => {
  console.log("props: ", props);
  const themeDispatch = useContext(ThemeDispatch);
  return (
    <div>
      <span>child</span>
      <div
        style={{
          width: "20px",
          height: "20px",
          background: props.theme.bgColor,
        }}
      ></div>
      <button onClick={() => themeDispatch({ type: "red" })}>red theme</button>
      <button onClick={() => themeDispatch({ type: "blue" })}>
        blue theme
      </button>
    </div>
  );
};

export default function App() {
  const [theme, dispatch] = useReducer(themeReducer, blueTheme, (state) => {
    console.log("state: ", state);
    return state;
  });
  console.log("theme: ", theme);
  return (
    <div>
      <ThemeDispatch.Provider value={dispatch}>
        <Child theme={theme} />
      </ThemeDispatch.Provider>
    </div>
  );
}
