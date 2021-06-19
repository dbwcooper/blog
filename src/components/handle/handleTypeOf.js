

function myTypeOf(obj) {
  // [Object string]
  return Object.prototype.toString.call(obj).slice(8, -1)
}

