import React from "react";
import ReactDOM from "react-dom";

export default class App extends React.Component {
  onClick = () => {
    const dom = ReactDOM.findDOMNode(this)!;
    dom.style.color = "red";
  };
  render() {
    return <button onClick={this.onClick}>change color</button>;
  }
}
