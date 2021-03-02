import "./App.css";
import starfieldbottom from "./imgs/Starfieldbottom.png";
import Col from "react-bootstrap/Col";
import Cockpit from "./Cockpit";
import Starfield from "./Starfield";
import Starfieldbase from "./Starfieldbase";
import React, { Component } from "react";
import PopupOne from "./popups/PopupOne";

export class App extends Component {
  constructor(props) {
    super(props);
    this.onAnimationIteration = this.onAnimationIteration.bind(this);
    this.state = {
      starfieldcount: 0,
      classNames: "",
      animationFinished: false,
    };
    this.startStopAnimation = () => {
      const { classNames } = this.state;

      this.setState({ classNames: classNames ? "" : "StarfieldClass" });
    };

    this.onAnimationStart = () => {
      this.setState({
        animationFinished: false,
        showAnimationStartLabel: true,
      });
    };

    this.onAnimationEnd = () => {
      this.setState({
        animationFinished: true,
      });
    };
    this.handleClick = () => {
      this.startStopAnimation();
      console.log("clicked");
    };
  }
  onAnimationIteration() {
    this.setState((prevState) => {
      return {
        starfieldcount: prevState.starfieldcount + 1,
      };
    });
  }
  render() {
    const { animationFinished, showAnimationStartLabel } = this.state;
    const displayState = animationFinished ? "block" : "none";
    const displayStateAnimationStart =
      !animationFinished && showAnimationStartLabel ? "block" : "none";
    

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
          className={`StarfieldClass ${this.state.classNames}`}
          onAnimationIteration={this.onAnimationIteration}
          onAnimationEnd={this.onAnimationEnd}
          onAnimationStart={this.onAnimationStart}
        />
        
        <Cockpit
          className={`StarfieldClass ${this.state.classNames}`}
          onAnimationEnd={this.onAnimationEnd}
          onAnimationStart={this.onAnimationStart}
          handleClick={this.handleClick}
        />
        
      </div>
      
      
      
    );
  }
}

export default App;
