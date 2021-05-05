import React from "react";
import ReactDOM from "react-dom";

const OtherRoot = () => {
  return <div>1</div>;
};
export default class App extends React.Component {
  onClick = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("otherRoot")!);
  };

  componentDidMount() {
    const t = document.getElementById("otherRoot");
    ReactDOM.render(<OtherRoot />, t);
  }
  render() {
    return (
      <div>
        <button onClick={this.onClick}>unmountComponentAtNode</button>
        <div> other react root component </div>
        <div id="otherRoot">
          <OtherRoot />
        </div>
      </div>
    );
  }
}
