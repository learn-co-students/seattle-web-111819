import React from "react";
import Friend from "./Friend";

class FriendsBrowser extends React.Component {
  render() {
    return (
      <>
        <h2>List of {this.props.title}</h2>
        <ul>
          {this.props.friends.map((friend, index) => {
            return <Friend key={index} name={friend} />;
          })}
        </ul>
      </>
    );
  }
}

export default FriendsBrowser;
