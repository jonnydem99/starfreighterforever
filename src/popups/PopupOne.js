import React, { Component } from "react";
import GreenTerminal from "../imgs/GreenTerminalBackground.png";
import Button from "react-bootstrap/Button";
import PopupData from "./PopupData";
import One from "../buttons/One";
import Two from "../buttons/Two";

export class PopupOne extends Component {
  constructor(props) {
    super(props);
    this.startStopAnimationfive = this.startStopAnimationfive.bind(this);
    this.humanplusone = this.humanplusone.bind(this);
    this.computerplusone3 = this.computerplusone3.bind(this);
    this.alignmentcomputerplusone = this.alignmentcomputerplusone.bind(this);
    this.state = {};
  }

  startStopAnimationfive() {
    this.props.startStopAnimation4();
  }

  humanplusone() {
    this.props.humanplusone()};

  computerplusone3() {
    this.props.computerplusone3()};

  alignmentcomputerplusone() {
    this.props.alignmentcomputerplusone()};

  render() {
    const style = this.props.popupvisibleCockpitLevel
      ? {}
      : { display: "none" };
    console.log("style = " + JSON.stringify({ style }));

    const PopUpDataID = this.props.starfieldcountCockpitLevel;

    function PopupText() {
      for (let i = 0; i < PopupData.length; i++)
        if (PopUpDataID === PopupData[i].id) return PopupData[i].text;
    }
    /*
    function PopupButtons() {
      for (let i = 0; i < PopupData.length; i++)
        if (PopUpDataID === PopupData[i].id) return "" + PopupData[i].buttons;
    }
    
          for (let index=0; index < this.PopupData.length; index++) {
            if (items.data[index].itemId === match.params.itemId) {
                setItem(items.data[index]);
                console.log("found match itemId=" + items.data[index].itemId);
                console.log(items.data[index]);
                break;
            }
*/
    let buttonDisplay;
    if (this.props.starfieldcountCockpitLevel === 0) {
      buttonDisplay = <One startStopAnimation6={this.startStopAnimationfive} />;
    } else if (this.props.starfieldcountCockpitLevel === 1) {
      buttonDisplay = (
        <Two
          startStopAnimation6={this.startStopAnimationfive}
          humanplusone={this.humanplusone}
          computerplusone4={this.computerplusone3}
          alignmentcomputerplusone={this.computerplusone}
        />
      );
    } else if (this.props.starfieldcountCockpitLevel === 2) {
      buttonDisplay = <One startStopAnimation6={this.startStopAnimationfive} />;
    }
    return (
      <div className="popupshell" style={style}>
        {console.log("PopupOne popupvisible? = " + this.popupv)}

        <p style={{ padding: "8%" }}>{PopupText()}</p>
        <div >{buttonDisplay}</div>
      </div>
    );
  }
}

export default PopupOne;
