import React, { Component } from "react";
import Starfieldimg from "./imgs/StarfieldLong.png";


export class Starfield extends Component {
  constructor(props) {
    super(props);
    this.onAnimationIteration = this.onAnimationIteration.bind(this);
    /*this.animationinfinitechange = this.animationinfinitechange.bind(this);*/
    this.startStopAnimation = this.startStopAnimation.bind(this);
    this.onAnimationStart = this.onAnimationStart.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      starfieldcount: 0,
      classNames: "",
      animationFinished: false,
      showAnimationStartLabel: false,
      /*infiniteanimation: false,*/
      popupvisible: false,
    };
  }
/*
  animationinfinitechange() {
    this.setState((prevState) => {
      return {
        infiniteanimation: !prevState.infiniteanimation,
      };
    });
  }
*/
  startStopAnimation() {
    const { classNames } = this.state;

    this.setState({ classNames: classNames ? "" : "animation" });
    setTimeout(() => {
      console.log("classNames = " + this.state.classNames);
    }, 1000);
  };

  onAnimationStart = () => {
    this.setState({
      animationFinished: false,
      showAnimationStartLabel: true,
    });
  };

  onAnimationEnd = () => {
    this.setState({
      animationFinished: true,
      showAnimationStartLabel: false,
    });
  };
  handleClick = () => {
    this.startStopAnimation();
    console.log("clicked");
  };

  
  onAnimationIteration() {
    const starfieldcount = this.state.starfieldcount;

    /*this.animationinfinitechange();*/

    console.log("count = " + this.state.starfieldcount);

    this.setState((prevState) => {
      return {
        starfieldcount: prevState.starfieldcount + 1,
      };
    });

    setTimeout(() => {
      console.log("count = " + this.state.starfieldcount);
    }, 1000);
  }
  
  render() {
    /*const animationinfinite = this.infiniteanimation
      ? { animation: "Starfield-background 1000s linear infinite" }
      : {}; */
    return (
      <div
        className={`StarfieldClass ${this.state.classNames}`}
        onAnimationEnd={this.onAnimationEnd}
        onAnimationStart={this.onAnimationStart}
        /*style={animationinfinite}*/
        onAnimationIteration={this.onAnimationIteration}
      >
        
        <button onClick={() => this.startStopAnimation()}>
          Start/stop the animation
          {console.log("classNames = " + this.state.classNames)}
        </button>
        
      </div>
    );
  }
}

export default Starfield;
