function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => {
    return (...args) => a(b(...args));
  });
}

const fns = [
  (a) => console.log("a: ", a),
  (b) => console.log("b: ", b),
  (c) => console.log("c: ", c),
  (d) => console.log("d: ", d),
  (e) => console.log("e: ", e),
  (f) => console.log("f: ", f),
];
let fn = compose(...fns);
console.dir(fn);
fn("1");
