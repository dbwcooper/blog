import React from "react";

function areEqual(prevProps: any, props: any) {
  return (
    prevProps.count === props.count &&
    prevProps.person.name === props.person.name
  );
}

const ChildMemo = React.memo((props: any) => {
  console.log("memo props: ", props);
  return (
    <div>
      <h3>memo Function Component</h3>
      <div>props count: {props.count}</div>
      <div>props.person.name: {props.person.name}</div>
    </div>
  );
}, areEqual);

const Child = (props: any) => {
  console.log("props: ", props);
  return (
    <div>
      <h3>Function Component</h3>
      <div>props count: {props.count}</div>
    </div>
  );
};

export default class App extends React.Component {
  state = {
    count: 1,
    person: {
      name: "Tom",
    },
  };
  onUpdateCount = () => {
    this.setState((prevState: any) => ({
      count: prevState.count + 1,
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
        <ChildMemo count={this.state.count} person={this.state.person} />
        <Child count={this.state.count} person={this.state.person} />
      </div>
    );
  }
}
