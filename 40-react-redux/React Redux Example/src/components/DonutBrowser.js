import React, { Component } from "react";
import { connect } from "react-redux";

export class DonutBrowser extends Component {
  render() {
    return (
      <div>
        {Object.values(this.props.donuts).map((donut, index) => {
          return <p key={index}>{donut.name}  -- ${donut.price}</p>;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    donuts: state.donut.donuts
  };
};

export default connect(mapStateToProps)(DonutBrowser);
