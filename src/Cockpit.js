import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Freighter from "./Freighter";
import PopupOne from "./popups/PopupOne";


export class Cockpit extends Component {
  render() {
    return (
      <div className="cont">
        
        <div className="ship">
          <Freighter />
        </div>
          <PopupOne />
      </div>
    );
  }
}

export default Cockpit;
