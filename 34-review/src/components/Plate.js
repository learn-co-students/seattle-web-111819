import React, { Component } from "react";
import Food from "./Food";

class Plate extends Component {
  displayPlate = () => {
    console.log("invoked");
    return this.props.food.map(food => {
      return (
        <Food
          key={food.name}
          food={food}
          onFoodSelect={this.props.onFoodSelect}
        />
      );
    });
    //DISPLAY FOOD HERE
  };

  render() {
    return (
      <div className="container jumbotron">
        <h4>PLATE CONTENTS</h4>
  <div className="row">{this.displayPlate()}</div>
      </div>
    );
  }
}

export default Plate;
