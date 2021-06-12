import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function myNew(_constructor, ...args){
    let o = {};
    o.__proto__ = _constructor.prototype;
    // 绑定 this
    _constructor.apply(o, ...args);

    return o;
}

ReactDOM.render(<App />, document.getElementById("root"));


/**
 * Object.create 有什么用
 * let a = Object.create(b);
 * a.__proto__ = b
 */
function ObjectCreate(_prototype) {

    // __proto__ 不可直接赋值，用 new Function() 模拟
    // let a = {};
    // a.__proto__ = _prototype;
    // return a;
    let Func = function(){}
    Func.prototype = _prototype;
    return new Func()
}

/**
 * 
 */
function InstanceOf(obj, func) {
    

}