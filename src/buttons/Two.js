import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Two extends Component {
  constructor(props) {
    super(props);
    this.startStopAnimation8 = this.startStopAnimation8.bind(this);
    this.startStopAnimation9 = this.startStopAnimation9.bind(this);
    this.state = {};
  }

  

  startStopAnimation8() {
    this.props.startStopAnimation6();
    this.props.computerplusone4()
  }

  startStopAnimation9() {
    this.props.startStopAnimation6();
    this.props.humanplusone();
  }

  render() {
    return (
      <div className="buttons-container">
        <Button onClick={() => this.startStopAnimation8()}>Jettison the child</Button>
        <Button onClick={() => this.startStopAnimation9()}>Do not Jettison the child</Button>
        
      </div>
    );
  }
}

export default Two;
