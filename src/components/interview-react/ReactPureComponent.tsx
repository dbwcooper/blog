import React from "react";

class ChildPure extends React.PureComponent<{
  count: number;
}> {
  state = {
    count: 1,
    person: {
      name: "tom",
    },
  };
  onClick = () => {
    this.setState({
      count: this.props.count,
    });
  };

  onUpdateName = () => {
    this.setState({
      person: {
        name: "alien",
      },
    });
  };
  render() {
    console.log("ChildPure render this.props: ", this.props);
    console.log("ChildPure render this.state: ", this.state);
    return (
      <div>
        <h3>Child Pure Component</h3>
        <div>props count: {this.props.count}</div>
        <div>
          <span>state count: {this.state.count}</span>
          <button onClick={this.onClick}>sync</button>
        </div>
        <div>
          <span>state person.name: {this.state.person.name}</span>
          <button onClick={this.onUpdateName}>sync</button>
        </div>
      </div>
    );
  }
}

class Child extends React.Component<{
  count: number;
}> {
  state = {
    count: 1,
    person: {
      name: "tom",
    },
  };
  onClick = () => {
    this.setState({
      count: this.props.count,
    });
  };

  onUpdateName = () => {
    this.setState({
      person: {
        name: "alien",
      },
    });
  };
  render() {
    console.log("Child render: ", this.props.count);
    return (
      <div>
        <h3>Child Component</h3>
        <div>props count: {this.props.count}</div>
        <div>
          <span>state count: {this.state.count}</span>
          <button onClick={this.onClick}>sync</button>
        </div>
        <div>
          <span>state person.name: {this.state.person.name}</span>
          <button onClick={this.onUpdateName}>sync</button>
        </div>
      </div>
    );
  }
}

export default class App extends React.Component {
  state = {
    count: 1,
    person: {
      name: "Tom",
    },
  };
  onUpdateCount = () => {
    this.setState((prevState: any) => ({
      count: 2,
    }));
  };
  onUpdateName = () => {
    this.setState((prevState: any) => ({
      person: {
        ...prevState.person,
        name: "Bob",
      },
    }));
  };
  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        <div>{this.state.person.name}</div>
        <button onClick={this.onUpdateCount}>Add Count</button>
        <button onClick={this.onUpdateName}>Update Name</button>
        <ChildPure count={this.state.count} />
        <Child count={this.state.count} />
      </div>
    );
  }
}
