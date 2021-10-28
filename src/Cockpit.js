import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Freighter from "./Freighter";
import PopupOne from "./popups/PopupOne";
import PopupData from "./popups/PopupData";


export class Cockpit extends Component {
  constructor(props) {
    super(props);
    this.startStopAnimation3 = this.startStopAnimation3.bind(this);
    this.humanplusone = this.humanplusone.bind(this);
    this.computerplusone2 = this.computerplusone2.bind(this);
    this.alignmentcomputerplusone = this.alignmentcomputerplusone.bind(this);
    this.state = {

    };
  }

  startStopAnimation3() {
    this.props.startStopAnimation()
  };

  humanplusone() {
    this.props.humanplusone()};

  computerplusone2() {
    this.props.computerplusone1()};

  alignmentcomputerplusone() {
    this.props.alignmentcomputerplusone()};

  render() {
    
    return (
      <div className="cont">
        
        <div className="ship">
          <Freighter />
        </div>
          <PopupOne popupvisibleCockpitLevel={this.props.popupvisibleAppLevel}
          starfieldcountCockpitLevel={this.props.starfieldcountAppLevel}
          startStopAnimation4={this.startStopAnimation3}
          humanplusone={this.humanplusone}
          computerplusone3={this.computerplusone2}
          alignmentcomputerplusone={this.computerplusone}
          />
          {console.log("popupvisible Cockpit level? = " + this.props.popupvisibleAppLevel + "   starfieldcount Cockpit Level? = " + this.props.starfieldcountAppLevel )}
          
      </div>
    );
  }
}

export default Cockpit;
