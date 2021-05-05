import React from "react";

/**
 * 总结:
 *  getSnapshotBeforeUpdate 在react 组件渲染到 dom之前的最后一步执行；
 *   #1 如果想保存组件更新前的状态，可以在此函数内操作。
 */

let timer: number | null | undefined = null;

export default class App extends React.Component {
  state = {
    count: 5,
  };

  getSnapshotBeforeUpdate(prevProps: any, prevState: { count: number }) {
    if (this.state.count !== prevState.count) {
      console.log(
        "this.listRef.current.scrollHeight: ",
        this.listRef.current?.scrollHeight
      );
      return this.listRef.current?.scrollHeight;
    }
    return 1;
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    let rectObj = this.listRef.current?.getBoundingClientRect()!;
    const currentScrollTop = this.listRef.current?.scrollTop;

    // if (snapshot) {
    //   this.listRef.current?.scrollTop =
    //     currentScrollTop + this.listRef.current?.scrollHeight - snapshot;
    // }
    window.scrollTo(0, this.listRef.current?.scrollHeight!);
    console.log(
      "this.listRef.current.scrollHeight: ",
      this.listRef.current?.scrollHeight
    );

    if (this.state.count === 30) {
      if (typeof timer === "number") {
        clearInterval(timer);
      }
    }
  }

  componentDidMount() {
    timer = setInterval(() => {
      this.setState((prevState) => ({ count: (prevState as any).count + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    if (typeof timer === "number") {
      clearInterval(timer);
    }
  }

  listRef = React.createRef<HTMLDivElement>();

  render() {
    const list = new Array(this.state.count);
    list.fill(1);
    return (
      <div>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              count: (prevState as any).count + 1,
            }))
          }
        >
          add
        </button>
        <div ref={this.listRef}>
          {list.map((_, index) => (
            <div
              key={index}
              style={{
                width: "200px",
                height: "50px",
                color: "red",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid blue",
              }}
            >
              {index}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
