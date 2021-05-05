import React from "react";
import ReactDOM from "react-dom";

ReactDOM.unstable_batchedUpdates;
ReactDOM.unstable_renderSubtreeIntoContainer;

class FooterComponent extends React.Component<{ visible: boolean }> {
  render() {
    const { visible } = this.props;
    return (
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            position: "fixed",
            bottom: "0px",
            width: "100%",
            height: "300px",
            border: "4px solid green",
            boxSizing: "border-box",
            display: visible ? "block" : "none",
          }}
        >
          Footer
        </div>
      </div>
    );
  }
}

class Footer extends React.Component<{ visible: boolean }> {
  render() {
    return ReactDOM.createPortal(
      <FooterComponent visible={this.props.visible} />,
      document.body
    );
  }
}

export default class App extends React.Component {
  state = {
    visible: false,
  };
  onShowFooter = () => {
    this.setState({
      visible: true,
    });
  };

  onHideFooter = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div onClick={console.log}>
        <button onClick={this.onShowFooter}>show Footer</button>
        <button onClick={this.onHideFooter}>hide Footer</button>
        <Footer visible={this.state.visible} />
      </div>
    );
  }
}
