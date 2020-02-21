import React, { Component } from "react";
import { connect } from "react-redux";
import { buyDonut, fetchDonuts } from "../redux";

class DonutContainer extends Component {
  render() {
    return (
      <>
        <h2>My Donuts</h2>
        <h4>Total Donuts Sold: {this.props.donutsSold}</h4>
        <button
          className="btn btn-warning"
          onClick={() => this.props.fetchDonuts()}
        >
          See Menu
        </button>
        <br />
        <button className="btn btn-info" onClick={this.props.buyDonut}>
          Buy Donut
        </button>
      </>
    );
  }
}

//this recovers the redux state, and uses it to assign props in the current component
//which data do you want here?
const mapStateToProps = state => {
  return {
    donutsSold: state.donut.donutsSold,
    donuts: state.donut.donuts
  };
};

//this collects actions from the redux action list, and adds them to the props as possible actions
//what kind of 'callback props' do you need access to?
const mapDispatchToProps = dispatch => {
  return {
    buyDonut: () => dispatch(buyDonut()),
    fetchDonuts: () => dispatch(fetchDonuts())
  };
};

//connect is a HOC that subscribes the component to the given state and dispatch data.
export default connect(mapStateToProps, mapDispatchToProps)(DonutContainer);
