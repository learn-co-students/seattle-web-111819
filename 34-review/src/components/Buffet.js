import React, { Component } from "react";
import Food from "./Food";

class FoodContainer extends Component {
  //this.props.addFoodToPlate = function prop from App

  displayBuffet = () => {
    console.log("invoked");
    return this.props.food.map(food => {
      return (
        <Food key={food.id?food.id:food.name} food={food} onFoodSelect={this.props.onFoodSelect} />
      );
    });
    //DISPLAY FOOD HERE
  };

  render() {
    return (
      <div className="container jumbotron">
        <h4>{this.props.headerText} CONTENTS</h4>
        <div className="row">{this.displayBuffet()}</div>
      </div>
    );
  }
}

export default FoodContainer;
