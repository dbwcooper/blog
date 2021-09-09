let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(1);
  }, 1000);
});
let p2 = new Promise((resolve, reject) => setTimeout(reject, 100, "test"));
let p3 = new Promise((resolve, reject) => {
  throw new Error("error");
});
let p = [p1, p2, p3];

Promise.any(p)
  .then(
    (data) => {
      console.log("any resolve, ", data);
    },
    (data) => {
      console.log("any reject, ", data);
    }
  )
  .catch((error) => {
    console.log("error, ", error);
  });

// 执行结果: any resolve 1
