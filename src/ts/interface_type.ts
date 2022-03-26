// https://juejin.cn/post/7072945053936648200#heading-5
// type 定义的四种方式
type userName = string;

type address = string | number;

type Props = {
  name: userName;
  location: address;
};

type Tree<T> = { value: T };

// interface 定义的几种方式
interface Point {
  x: number;
  y: number;
}

type TPoint = {
  x: number;
  y: number;
};

interface SetPoint {
  (x: number, y: number): void;
}

// 相同点 1 都能被继承
// interface 继承 interface
// interface 继承 type
// type 继承 type ： type a = b & c
// type 继承 interface ： type a = Point & {}
interface IPoint extends Point {}
interface IPoint2 extends TPoint {}

// 相同点 2 都能被 implements
// 不能 implements type 联合类型

class PointC implements Point {
  x = 1;
  y = 1;
}
class TPointC implements TPoint {
  x = 1;
  y = 1;
}

/**
 * 不同点
 * #1 type 可以用来定义基础类型，interface 不行
 * #2 type 可以声明联合类型，interface 只能 extends
 * #3 type 可以声明 元祖 类型
 * #4 interface 可以声明合并
 * #5 因为 interface 可以声明合并，所以 interface 在赋值时有索引签名问题，索引不固定。
 */

// #4
interface Inter {
  name: string;
}

interface Inter {
  age: number;
}

let a: Inter = {
  age: 1,
  name: "",
};

// #5

interface propType {
  [key: string]: string;
}

type propsType1 = {
  name: string;
};

interface propsType2 {
  name: string;
}
let t1: propsType1 = {
  name: "1",
};
let t2: propsType2 = {
  name: "1",
};

let data: propType;
data = t1;
// data = t2; // 类型“propsType2”中缺少类型“string”的索引签名
