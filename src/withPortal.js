import React, { Component } from "react";
import ReactDOM from "react-dom";

export default TheComponent =>
  class TheComponentWithPortal extends Component {
    constructor(props) {
      super(props);
      this.el = document.createElement("div");
    }

    componentDidMount() {
      document.body.appendChild(this.el);
    }

    componentWillUnmount() {
      document.body.removeChild(this.el);
    }

    render() {
      return ReactDOM.createPortal(<TheComponent {...this.props} />, this.el);
    }
  };
