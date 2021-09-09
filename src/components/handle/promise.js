let p1 = Promise.resolve(1)
  .then((start) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(start + "1");
      }, 1000);
    });
  })
  .then((count) => {
    console.log("count: ", count);
  });

let p2 = Promise.reject(2);
let p3 = Promise.reject(3);

let errorP4 = Promise.reject(4).then(() => {
  return new Error("error");
});

// 不会报错； errorP4 会返回错误信息到 data 的第4个元素中
Promise.allSettled([p1, p2, p3, errorP4]).then((data) => {
  console.log("allSettled: ", data);
});

Promise.all([p1, p2, p3, errorP4])
  .then((data) => {
    console.log("all: ", data);
  })
  .catch((error) => {
    console.log("error: ", error);
  });

Promise.any([p2, p3]).then(
  (data) => {
    console.log("any fulfilled: ", data);
  },
  (data) => {
    console.log("any rejected: ", data);
  }
);




const raceP = Promise.race([
  // fetch('/resource-that-may-take-a-while'),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('race data')
    }, 6000);
  }),
  new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('request timeout')), 5000)
  })
]);

raceP
.then(console.log, console.log)
.catch(console.error);