import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Freighter from "./Freighter";


export class Cockpit extends Component {
  render() {
    return (
      <div className="cont">
        
        <div className="ship">
          <Freighter />
        </div>
        <div>
          <Freighter />
        </div>
      </div>
    );
  }
}

export default Cockpit;
