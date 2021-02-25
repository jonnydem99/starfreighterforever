import React, { Component } from "react";
import StarFreighter from "./imgs/StarFreighter.png";
import Col from "react-bootstrap/Col";

export class Freighter extends Component {
  render() {
    return (
      <img
        className="Freighterimg"
        src={StarFreighter}
        alt="Star Freighter"
        width="auto"
        height="200vh"
      />
    );
  }
}

export default Freighter;
