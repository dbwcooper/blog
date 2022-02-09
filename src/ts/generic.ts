// 范型函数
export function createArray<T>(length: number, value: T): Array<T> {
  return Array.from({ length }, () => value);
}

// 范型接口

interface createArrayG {
  <T>(length: number, value: T): Array<T>;
}

interface createArrayG2<T> {
  (length: number, value: T): Array<T>;
}

let createArrayG: createArrayG;
createArrayG = function <T>(length: number, value: T) {
  return Array.from({ length }, () => value);
};
let createArrayG2: createArrayG2<any>;
createArrayG2 = function <T>(length: number, value: T) {
  return Array.from({ length }, () => value);
};

// 范型类

class GenericNumber<T> {
  value!: T;
  add!: (x: T, y: T) => T;
}
let myG = new GenericNumber<number>();
myG.value = 0;
myG.add(1, 2);
