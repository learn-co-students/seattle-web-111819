import React, { Component } from "react";
import PropTypes from "prop-types";

class Greeting extends Component {
  render() {
    const { randomNumber, onSayHi } = this.props;
    console.log(onSayHi());
    return (
      <div>
        <h2>Welcome to the App</h2>
        <p>Your magic number is {randomNumber}</p>
      </div>
    );
  }
}

export default Greeting;

Greeting.defaultProps = {
  randomNumber: 0,
  onSayHi: () => {
    return "default";
  }
};

Greeting.displayName = "Test";

Greeting.propTypes = {
  randomNumber: PropTypes.number
};
