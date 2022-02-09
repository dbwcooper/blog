import React, { useCallback, useState } from 'react';
import './Style.less';

// best
// const getKeyValue =
//   <T extends object, U extends keyof T>(key: U) =>
//   (obj: T) =>
//     obj[key];

function setRootTheme(data: Record<string, any>): void {
  Object.keys(data).forEach((key: string) => {
    let cssKey = key.startsWith('--') ? key : `--${key}`;
    let cssValue = data[key];
    document.documentElement.style.setProperty(cssKey, cssValue);
  });
}

export default function App() {
  const [color, setColor] = useState('#0076ce');
  const [height, setHeight] = useState('100px');

  const onUpdate = useCallback(() => {
    setRootTheme({
      'primary-color': color,
      height: height
    });
  }, [color, height]);
  return (
    <div className="home">
      <div className="color"> var(--primary-color)</div>
      <div className="layout"> var(--height)</div>
      <div className="action">
        <div>
          <span>--primary-color</span>
          <input
            value={color}
            onChange={(e) => {
              let c = e.target.value;
              setColor(c);
            }}
          />
        </div>
        <div>
          <span>--height</span>
          <input
            value={height}
            onChange={(e) => {
              let c = e.target.value;
              setHeight(c);
            }}
          />
        </div>
        <button onClick={onUpdate}>Update</button>
      </div>
    </div>
  );
}
