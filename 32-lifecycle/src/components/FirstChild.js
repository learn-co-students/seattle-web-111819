import React from "react";

class FirstChild extends React.Component {
  constructor(props) {
    console.log("%cCHILD CONSTRUCTED", "color:blue;");
    super();
    this.state  = {
        originalAmount: props.myValue
    }
  }

  componentDidMount() {
    console.log("%cCHILD MOUNTED", "color:blue;background-color:beige;");
  }

  static getDerivedStateFromProps(props, state) {
      return { originalAmount: props.myValue }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.myValue % 10 === 0;
  }

  render() {
    console.log("%cCHILD RENDERED", "color:blue;");

    return (
      <div>
        <h2>FIRST CHILD</h2>
        <h3>{this.props.myValue}</h3>
        <h3>{this.state.originalAmount}</h3>
      </div>
    );
  }
}

export default FirstChild;
