import React from 'react';

export const FlexPage = () => (
  <header>
    <div className='wrapper'>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div style={{ flex: 1, border: '1px solid red' }}>box : flex 1</div>
        <div style={{ flex: 'auto', border: '1px solid green' }}>
          <div>box: flex: 'auto'</div>
          222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          marginTop: 50,
        }}
      >
        <div style={{ flex: 1, border: '1px solid red' }}>box : flex 1</div>
        <div style={{ flex: 1, border: '1px solid green' }}>
          <div>box: flex: 1</div>
          222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          marginTop: 50,
        }}
      >
        <div style={{ margin: 'auto', border: '1px solid red' }}>
          box : margin: 'auto'
        </div>
        <div style={{ margin: 'auto', border: '1px solid green' }}>
          <div>box: flex: 1</div>
          222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          marginTop: 50,
        }}
      >
        <div style={{ marginLeft: 'auto', border: '1px solid red' }}>
          box : margin-left: 'auto'
        </div>
        <div style={{ margin: 'auto', border: '1px solid green' }}>
          <div>box: flex: 1</div>
          222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          marginTop: 50,
        }}
      >
        <div style={{ marginLeft: 'auto', border: '1px solid red' }}>
          box : margin-left: 'auto'
        </div>
        <div style={{ border: '1px solid green' }}>
          <div>no margin and flex properties</div>
          222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          marginTop: 50,
        }}
      >
        <div style={{ border: '1px solid red' }}>
          <div>no margin and flex properties</div>
        </div>
        <div style={{ marginRight: 'auto', border: '1px solid green' }}>
          <div>box : margin-right: 'auto'</div>
          222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        </div>
      </div>

      <p>
        flex-grow: 剩余空间：100 = 600 - 300 - 200 均分： 100/3 = 33.33 所以
        第一块 = 300 + 33 = 333.33 第二块 = 200 + 67 = 266.67
      </p>
      <div
        style={{
          display: 'flex',
          border: '1px solid #ccc',
          width: 600,
          height: 200,
        }}
      >
        <div style={{ flex: '1 2 300px', backgroundColor: 'red' }}>
          flex: '1 2 300px', backgroundColor: 'red'
        </div>
        <div style={{ flex: '2 1 200px', backgroundColor: 'blue' }}>
          flex: '2 1 200px', backgroundColor: 'blue'
        </div>
      </div>

      <p>
        <div>溢出： 400 + 500 - 600 = 300;</div>
        <div>权重： 2 * 400 + 1 * 500 = 1300</div>
        <div>div1: 400 - 8/13 * 300 = 215.38</div>
        <div>div1: 500 - 5/13 * 300 = 384.62</div>
      </p>
      <div
        style={{
          display: 'flex',
          border: '1px solid #ccc',
          width: 600,
          height: 200,
        }}
      >
        <div style={{ flex: '1 2 400px', backgroundColor: 'red' }}>
          flex: '1 2 400px', backgroundColor: 'red'
        </div>
        <div style={{ flex: '2 1 500px', backgroundColor: 'blue' }}>
          flex: '2 1 500px', backgroundColor: 'blue'
        </div>
      </div>
    </div>
  </header>
);
