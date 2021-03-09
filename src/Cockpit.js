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
    
    this.state = {

    };
  }
  render() {
    
    return (
      <div className="cont">
        
        <div className="ship">
          <Freighter />
        </div>
          <PopupOne popupvisibleCockpitLevel={this.props.popupvisibleAppLevel}
          starfieldcountCockpitLevel={this.props.starfieldcountAppLevel}/>
          {console.log("popupvisible Cockpit level? = " + this.props.popupvisibleAppLevel + "   starfieldcount Cockpit Level? = " + this.props.starfieldcountAppLevel )}
      </div>
    );
  }
}

export default Cockpit;
