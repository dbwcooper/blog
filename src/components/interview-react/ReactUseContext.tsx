import React, { useState, createContext, useContext } from "react";

const blueTheme = {
  type: "blue",
  bgColor: "blue",
};

const redTheme = {
  type: "red",
  bgColor: "red",
};

const ThemeContext = createContext(blueTheme);

const Child = (props: any) => {
  const color = useContext(ThemeContext);
  return (
    <div>
      <span>child</span>
      <div
        style={{ width: "20px", height: "20px", background: color.bgColor }}
      ></div>
      <button onClick={props.onThemeChange}>change theme</button>
    </div>
  );
};

export default function App() {
  const [theme, setTheme] = useState(blueTheme);

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Child
          onThemeChange={() => {
            const newTheme =
              theme.type === blueTheme.type ? redTheme : blueTheme;
            setTheme(newTheme);
          }}
        />
      </ThemeContext.Provider>
    </div>
  );
}
