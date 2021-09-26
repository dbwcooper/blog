import React from "react";

export default class ErrorBoundary extends React.Component {
  state = {
    error: false,
  };

  // 用于 更新 UI
  static getDerivedStateFromError(error) {
    return {
      error: true,
    };
  }

  // 用于记录错误日志。info 是详细的错误信息
  componentDidCatch(error, info) {
    console.error(info);
    // fetchErrorApi
  }
  render() {
    if (this.state.error) {
      return <div>Component Error, please check !</div>;
    }
    return this.props.children;
  }
}
