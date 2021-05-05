import React, { useEffect, useState } from 'react';
import APromise from './PromiseThenPromise';

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    new APromise((resolve: any, reject: any) => {
      setTimeout(() => {
        setCount(count + 1);
        reject(1);
      }, 1000);
    })
      .then((data: any) => {
        console.log('1 data: ', data);
        return new APromise((resolve: any, reject: any) => {
          setTimeout(() => {
            setCount(count + 1);
            resolve(2);
          }, 1000);
        });
      })
      .then((d: any) => {
        console.log('2 data: ', d);
      })
      .then((d: any) => {
        console.log('3 data: ', d);
      }).catch((error) => {
        console.log('catch: ', error)
      });
  }, []);
  return (
    <div>
      <div>Promise Simple: {count}</div>
      ssr starter
    </div>
  );
};

export default App;
