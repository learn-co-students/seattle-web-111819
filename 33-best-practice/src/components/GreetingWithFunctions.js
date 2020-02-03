import React, { Component } from "react";
import Greeting from "./Greeting";

class GreetingWithFunctions extends Component {
  sayHi = () => {
    return "hi";
  };
  render() {
    return <Greeting onSayHi={this.sayHi} />;
  }
}

export default GreetingWithFunctions;
