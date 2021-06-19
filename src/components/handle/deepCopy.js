/**
 *
 *
 * #1 基础类型 ｜ undefined ｜ null   直接返回
 * #2 处理 Date ｜ 正则  之后直接返回
 * #3 处理 Object
 *      -
 *      -
 */

function deepCopy(target, weakMap = new WeakMap()) {
  let typeOfArray = [
    "undefined",
    "number",
    "string",
    "boolean",
    "symbol",
    "function",
  ];
  let typeofKey = typeof target;
  if (typeOfArray.includes(typeofKey)) {
    return target;
  }

  if (target === null) {
    return target;
  }

  if (target instanceof Date) {
    return new Date(target);
  }

  if (target instanceof RegExp) {
    return new RegExp(target);
  }

  if (typeof target === "object") {
    let cloneObj = target instanceof Array ? [] : {};
    if (weakMap.get(target)) return target;
    weakMap.set(target);
    for (const key in target) {
      if (Object.hasOwnProperty.call(target, key)) {
        const element = target[key];
        cloneObj[key] = deepCopy(element, weakMap);
      }
    }
    return cloneObj;
  }
}
