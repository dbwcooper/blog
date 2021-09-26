import React from 'react';

const style = {
  width: '400px',
  height: '400px',
  border: '1px solid green',
};
export const Page = () => (
  <div>
    <div style={style}>
      <div style={{ width: 100, margin: '0px auto' }}>margin 居中</div>
      <div style={{ width: 100, margin: '0px auto', justifyContent: 'center' }}>
        margin 居中
      </div>

      <div style={{ width: 50, height: 50 }}>height 居中</div>
    </div>
  </div>
);

export default Page;
