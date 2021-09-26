import React from 'react';

export const AnimationPage = () => (
  <div>
    <div
      style={{
        transition: 'all 0.3',
        height: '30px',
        border: '1px solid green',
      }}
    >
      transition
    </div>
    <div style={{ transform: 'translate(10, 10)' }}>transform</div>
  </div>
);
