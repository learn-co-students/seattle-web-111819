import React from "react";
import FriendsBrowser from "./FriendsBrowser";

class App extends React.Component {
  state = {
    friends: ["Soundarya", "Ix", "Lucy", "Cody", "David", "Greg"],
    students: ["Bahay", "Natali", "Mia", "Tanner"],
    foods: ["Ice Cream", "Salmon"]
  };

  render() {
    return (
      <div>
        <h1>Hello From App Component</h1>
        <FriendsBrowser friends={this.state.friends} title="Friends" />
        <FriendsBrowser friends={this.state.students} title="Students" />
        <FriendsBrowser friends={this.state.foods} title="Foods" />
      </div>
    );
  }
}

export default App;
