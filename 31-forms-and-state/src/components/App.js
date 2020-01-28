import React from "react";
import FriendsBrowser from "./FriendsBrowser";
import FriendForm from "./FriendForm";

class App extends React.Component {
  state = {
    friends: [
      { name: "Soundarya", age: 12 },
      { name: "Ix", age: 12 }
    ]
  };

  addFriend = friend => {
    // console.log(`new friend ${friend} added`);
    this.setState(
      prevState => {
        return { friends: [...prevState.friends, friend] };
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div>
        <h1>Hello From App Component</h1>
        <FriendForm onAddFriend={this.addFriend} />
        <FriendsBrowser friends={this.state.friends} title="Friends" />
      </div>
    );
  }
}

export default App;
