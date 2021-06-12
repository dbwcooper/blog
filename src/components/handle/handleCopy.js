// 浅拷贝 | 深拷贝 
// https://segmentfault.com/a/1190000020255831
// https://juejin.cn/post/6844904197595332622#heading-8
// #1 object.assign
//  对象属性为 基础类型时 是深拷贝
//  对象属性为 引用类型时 是浅拷贝
//  验证
let bob = { name: 'bob', age: 22 }
let tom = { name: 'tom', age: 22, other: { country: 'China' } }
let a = Object.assign(tom, bob);
a.name = 'A'
a.other.country = 'US'; // tom.other.country === 'US'


// #2 展开运算符  ----  浅拷贝

let b = { ...a };
b.other.country = 'China'; // a.other.country === 'China'


// #3 Array.prototype.concat

let a = [1, 2, { name: 'a' }];
let b = [3];
let c = a.concat(b);
c[2].name = 'c';
a[2].name // c


// 深拷贝 

// #1 JSON.stringify
// 缺点：
//    1 过滤 undefined， function，正则
//    2 过滤 function，正则
//    3 过滤 正则

let o = { a: { name: 'a', age: null, u: undefined, a: -10, function A(){ } } };
let co = JSON.parse(JSON.stringify(a));


// #1 直接返回
//    1. null | undefined
//    2. 基础类型 

// #2 需要处理一下再返回 (因为这些对象有自己的原型链方法)
//    1. Date 
//    2. Regx
//    3. function? 未处理

// #3 自引用
//    1. WeakMap

function deepCopy(target, weakMap = new WeakMap()) {

	// null  undefined 
	if (target === null || target === undefined) {
		return target;
	}

	// 基础类型
	if (typeof target !== 'object') {
		return target
	}
	// 正则对象
	if (target instanceof RegExp) {
		return new RegExp(target);
	}
	// Date 对象
	if (target instanceof Date) {
		return new Date(target)
	}

	// Array | Object
	let cloneObj = Array.isArray(target) ? [] : {};

	// 自引用问题: target.target
	if (weakMap.get(target)) return target
	weakMap.set(target, cloneObj);

	for (const key in target) {
		if (Object.hasOwnProperty.call(target, key)) {
			cloneObj[key] = deepCopy(target[key], map)
		}
	}
	return cloneObj;
}
