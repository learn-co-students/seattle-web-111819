import React from "react";
import Loader from "../assets/Loader";

const LoaderHOC = WrappedComponent => {
  return class LoaderHOC extends React.Component {
    isLoaded = () => {
      return this.props.season.season !== ""; //info that denotes a resolved state/props/information
      // return true
    };

    render() {
      return this.isLoaded() ? (
        <WrappedComponent {...this.props} />
      ) : (
        <Loader />
      );
    }
  };
};

export default LoaderHOC;
