import React from "react";
import { Redirect } from "react-router-dom";

class Details extends React.Component {
  getGlasses = () => {
    const id = this.props.match.params.id;
    let foundGlasses = { image: "", style: "", maker: "" };
    for (let glasses of this.props.glasses) {
      if (glasses.id == id) {
        foundGlasses = glasses;
      }
    }
    return foundGlasses;
  };

  render() {
    if (this.props.match.params.id > 4) {
      return <Redirect to="/glasses" />;
    } else {
      // setTimeout(() => {
      //   this.props.history.push("/manager")
      // }, 2500)
      const { image, style, maker } = this.getGlasses();
      return (
        <>
          {" "}
          <img className="card-img-top" src={image} />
          <div classNamer="card-body">
            <h3>{style}</h3>
            <h4>{maker}</h4>
          </div>
        </>
      );
    }
  }
}

export default Details;
