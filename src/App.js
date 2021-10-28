import "./App.css";
import starfieldbottom from "./imgs/Starfieldbottom.png";
import Col from "react-bootstrap/Col";
import Cockpit from "./Cockpit";
import Starfield from "./Starfield";
import Starfieldbase from "./Starfieldbase";
import React, { Component } from "react";
import PopupOne from "./popups/PopupOne";
import AnswerOptions from "./AnswerOptions";

export class App extends Component {
  constructor(props) {
    super(props);
    //this.onAnimationIteration = this.onAnimationIteration.bind(this);
    this.popvisibleChange = this.popvisibleChange.bind(this);
    this.startStopAnimation = this.startStopAnimation.bind(this);
    this.humanplusone = this.humanplusone.bind(this);
    this.computerplusone = this.computerplusone.bind(this);
    this.alignmentcomputerplusone = this.alignmentcomputerplusone.bind(this);
    this.state = {
      starfieldcount: 0,
      classNames: "",
      animationFinished: false,
      popupvisible: true,
      human: 0,
      computer: 0,
      alignmentcomputer: 0,
    };
  }

  startStopAnimation() {
    const { classNames } = this.state;

    /*this.handleChange();*/

    this.setState({ classNames: classNames ? "" : "animation" });

    this.popvisibleChange();

    setTimeout(() => {
      console.log(
        "classNames = " +
          this.state.classNames +
          " popupvisible = " +
          this.state.popupvisible
      );
    }, 1000);
  }

  humanplusone() {
    this.setState((prevState) => {
      return {
        human: prevState.human + 1,
      };
  })};

  computerplusone() {
    
    this.setState((prevState) => {
      {console.log("computer = " + this.state.computer)}
      return {
        computer: prevState.computer + 1,
        
      };
  })};

  alignmentcomputerplusone() {
    this.setState((prevState) => {
      return {
        alignmentcomputer: prevState.alignmentcomputer + 1,
      };
  })};

  popvisibleChange() {
    if (this.state.popupvisible === false) {
      this.setState((prevState) => {
        return {
          popupvisible: true,
          starfieldcount: prevState.starfieldcount + 1,
        };
      });
    } else if (this.state.popupvisible === true) {
      this.setState({
        popupvisible: false,
      });
    }

    setTimeout(() => {
      console.log(
        "this.state.starfiedcount in App = " + this.state.starfieldcount + " computer = " + this.state.computer
      );
    }, 1000);
  }

  render() {
    return (
      <div
        className="starfieldbottom"
        style={{ backgroundImage: `url(${starfieldbottom})` }}
      >
        <Starfieldbase
          className={`StarfieldClass ${this.state.classNames}`}
          onAnimationEnd={this.onAnimationEnd}
          onAnimationStart={this.onAnimationStart}
        />

        <Starfield
          startStopAnimation={this.startStopAnimation}
          classNames={this.state.classNames}
          className={`StarfieldClass ${this.state.classNames}`}
          onAnimationIteration={this.onAnimationIteration}
          onAnimationEnd={this.onAnimationEnd}
          onAnimationStart={this.onAnimationStart}
          popupvisible={this.state.popupvisible}
          onMotionChange={this.popvisibleChange}
          starfieldcount={this.state.starfieldcount}
          
        />
        <AnswerOptions />
        <Cockpit
          startStopAnimation={this.startStopAnimation}
          handleClick={this.handleClick}
          popupvisibleAppLevel={this.state.popupvisible}
          starfieldcountAppLevel={this.state.starfieldcount}
          humanplusone={this.humanplusone}
          computerplusone1={this.computerplusone}
          alignmentcomputerplusone={this.computerplusone}
        />
        {console.log("popupvisible App level? = " + this.state.popupvisible)}
      </div>
    );
  }
}

export default App;
