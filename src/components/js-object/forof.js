const arr = [1, 2, 3, 4, 5];

const it = arr[Symbol.iterator]();
it.next();

console.log(it.next())
