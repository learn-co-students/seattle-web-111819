import React from "react";
import Friend from "./Friend";

class FriendsBrowser extends React.Component {

  renderFriends = () => {
      return this.props.friends.map((friend, index) => {
        return <Friend key={index} friend={friend} />;
      });
  }

  render() {
    return (
      <>
        <h2>List of {this.props.title}</h2>
        <ul>
          {this.renderFriends()}
        </ul>
      </>
    );
  }
}

export default FriendsBrowser;
