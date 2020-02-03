import React, {Fragment} from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import GreetingWithFunctions from './components/GreetingWithFunctions'

class App extends React.Component {
  constructor() {
    super();
    this.changeAuthor = this.changeAuthor.bind(this);
  }

  state = {
    authors: ["John"]
  };

  randomNumber() {
    return `${Math.random()} authored by ${this.state.authors[0]}`;
  }

  changeAuthor(author, ...others) {
    // console.log(this)
    this.setState(prevState => {
      return { authors: [...prevState.authors, author, ...others] };
    });

  }

  makeDiv = () => {
    return (
      <Fragment>
        <p>Im a div</p>
      </Fragment>
    );
  };

  render() {
    return (
      <div onClick={() => this.changeAuthor("Tim", "Sarah", "Sam")}>
        <Greeting randomNumber={this.randomNumber()} />
        <GreetingWithFunctions />
        {this.makeDiv()}
      </div>
    );
  }
}

export default App;
