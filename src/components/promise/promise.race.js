let p1 = new Promise((resolve, reject) => setTimeout(resolve, 200, "test"));
let p2 = new Promise((resolve, reject) => setTimeout(reject, 100, "test"));
let p3 = new Promise((resolve, reject) => {
  throw new Error("error");
});
let p = [p1, p2, p3];

Promise.race(p)
  .then(
    (data) => {
      console.log("resolve, ", data);
    },
    (data) => {
      console.log("reject, ", data);
    }
  )
  .catch((error) => {
    console.log("error, ", error);
  });

// 执行结果: reject, Error xxx
