
// 返回对象的 __proto__ 指向原对象
Object.prototype.myCreate = function (originObj) {
  let obj = {};
  obj.__proto__ = originObj;
  return obj;
};
