import React from 'react';

export default function App() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            width: '40vh',
            height: '40vh',
            border: '1px solid red',
          }}
        >
          1
        </div>
        <div
          style={{
            width: '40vh',
            height: '40vh',
            border: '1px solid green',
          }}
        >
          2
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '500px',
          height: '500px',
        }}
      >
        <div
          style={{
            height: '40%',
            paddingLeft: '40%',
            border: '1px solid red',
          }}
        >
          1
        </div>
        <div
          style={{
            height: '40%',
            paddingLeft: '40%',
            border: '1px solid green',
          }}
        >
          2
        </div>
      </div>
    </div>
  );
}
