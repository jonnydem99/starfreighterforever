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
    this.state = {
      starfieldcount: 0,
      classNames: "",
      animationFinished: false,
      popupvisible: true,
    };
  }

  startStopAnimation() {
    const { classNames } = this.state;

    /*this.handleChange();*/

    this.setState({ classNames: classNames ? "" : "animation" });

    this.popvisibleChange()
    
    
    setTimeout(() => {
      console.log("classNames = " + this.state.classNames + " popupvisible = " + this.state.popupvisible);
    }, 1000);
  };

  popvisibleChange() {
    if (this.state.popupvisible === false){
    this.setState((prevState) => {
      return {
        popupvisible: true,
        starfieldcount: prevState.starfieldcount + 1,
        
      };
        });
      } else if (this.state.popupvisible === true){
        this.setState({
            popupvisible: false,
            
        
            });
      }
      

    setTimeout(() => {
      console.log("this.state.starfiedcount in App = " + this.state.starfieldcount);
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
        />
        {console.log("popupvisible App level? = " + this.state.popupvisible)}
      </div>
    );
  }
}

export default App;
