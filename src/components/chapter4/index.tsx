import React, { Component } from "react";
import "./style.less";

export default class DemoScroll extends Component {
  ref = React.createRef<HTMLDivElement>();

  componentDidMount() {
    // document.addEventListener('scroll', () => {
    //   console.log('window.scrollTop: ', document.documentElement.scrollTop)
    // });
    window.addEventListener("scroll", () => {
      console.log("  window window.scrollTop: ", window.scrollY);
    });
  }
  render() {
    return (
      <div style={{ height: "1000px" }}>
        <div style={{ border: "10px solid blue", overflow: "hidden" }}>
          <div
            style={{
              width: "100px",
              height: "100px",
              background: "#eee",
              float: "left",
            }}
          ></div>
        </div>
        <div style={{ border: "1px solid black", height: 100 }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              background: "#eee",
              float: "left",
            }}
          >
            左浮动元素
          </div>
          <div style={{ overflow: "hidden" }}>
            我是一个没有设置浮动, 也没有触发 BFC 元素, width: 200px;
            height:200px; background: #eee;我是一个没有设置浮动, 也没有触发 BFC
            元素, width: 200px; height:200px; background:
            #eee;我是一个没有设置浮动, 也没有触发 BFC 元素, width: 200px;
            height:200px; background: #eee;我是一个没有设置浮动, 也没有触发 BFC
            元素, width: 200px; height:200px; background: #eee;; height:200px;
            background: #eee;我是一个没有设置浮动, 也没有触发 BFC 元素, width:
            200px; height:200px; background: #eee;我是一个没有设置浮动,
            也没有触发 BFC 元素, width: 200px; height:200px; background: #eee;
          </div>
        </div>
        <header style={{ height: "200px", background: "green" }}>
          header 部分
        </header>

        <div style={{ minHeight: "600px" }}>
          <div
            style={{
              height: "1000px",
              width: "300px",
              border: "10px solid red",
            }}
          >
            <div className="triange"></div>
          </div>
        </div>

        <footer style={{ height: "200px", background: "green" }}>footer</footer>
      </div>
    );
  }
}
