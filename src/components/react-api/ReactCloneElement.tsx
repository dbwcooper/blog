import React, { Fragment } from "react";

const redTheme = {
  color: "red",
};

const Modal = (props: any) => {
  return (
    <div>
      <h3>Modal Title</h3>
      {React.Children.map(props.children, (item, index) => {
        return React.cloneElement(item, {
          style: redTheme,
          key: index,
          ref: console.log,
          "spm-id": index,
        });
      })}
    </div>
  );
};

const App = () => {
  return (
    <Modal>
      <div>content1</div>
      <div>content2</div>
      <div>content3</div>
      <div>content4</div>
      <div>content3</div>
    </Modal>
  );
};

export default App;
