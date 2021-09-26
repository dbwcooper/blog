import React from "react";

class ChildPure extends React.PureComponent<{
  count: number;
  person: { name: string };
}> {
  render() {
    return (
      <div>
        <h3>Pure Component</h3>
        <div>count: {this.props.count}</div>
        <div>person.name: {this.props.person.name}</div>
      </div>
    );
  }
}

export default class App extends React.Component {
  state = {
    count: 1,
    person: {
      name: "tom",
    },
  };

  render() {
    return (
      <div>
        <h3>Parent Component</h3>
        <ChildPure count={this.state.count} person={this.state.person} />
      </div>
    );
  }
}
