import React, { Component } from "react";

const INITIAL_STATE = {
  name: "",
  age: 0
};

class FriendForm extends Component {
  state = INITIAL_STATE;

  handleChange = e => {
    // if (!e.target.value.includes("s")) {
      console.log(e.target.value);
      this.setState({ [e.target.name]: e.target.value });
    // } else {
    //     this.setState({ name: this.state.name.toUpperCase()})
    // }
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onAddFriend(this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="name" className="my-label">
          New Friend
        </label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />{" "}
        <label htmlFor="age" className="my-label">
          New Friend Age
        </label>
        <input
          type="text"
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default FriendForm;
