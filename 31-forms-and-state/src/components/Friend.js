import React from "react";

class Friend extends React.Component {
  render() {
    return (
      <>
        <li>
          {this.props.friend.name}
          {", age: "}
          <span>{this.props.friend.age}</span>
        </li>
      </>
    );
  }
}

export default Friend;
