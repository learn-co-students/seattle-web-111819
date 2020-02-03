import React, { Component } from "react";
import "./App.css";
import FoodContainer from "./components/Buffet";
// import Plate from "./components/Plate";
import FOOD_ITEMS from "./FOOD.js";

class App extends Component {
  state = {
    buffetFood: FOOD_ITEMS.food, //this resolves to an array of objects with "name" and "image" props
    plateFood: [],
    serial: 1
  };

  reportCalories = () => {
      return this.state.plateFood.reduce((acc, food) => acc + parseInt(food.calories), 0)
  }

  foodSelect = addedFood => {
    this.setState(prevState => {
      return {
        plateFood: [
          ...prevState.plateFood,
          { ...addedFood, id: this.state.serial }
        ],
        serial: prevState.serial + 1,
        totalCalories: prevState.totalCalories + addedFood.calories
      };
    });
  };

  eatFood = food => {
    this.setState(prevState => {
      return {
        plateFood: prevState.plateFood.filter(item => item !== food)
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h3>Welcome to the All-You-Can-Eat Buffet</h3>
        <h4>
          Your plate contains {this.reportCalories()} calories of buffet
        </h4>
        <FoodContainer
          food={this.state.buffetFood}
          onFoodSelect={this.foodSelect}
          headerText="Buffet"
        />
        <FoodContainer
          food={this.state.plateFood}
          onFoodSelect={this.eatFood}
          headerText="Plate"
        />
      </div>
    );
  }
}

export default App;
