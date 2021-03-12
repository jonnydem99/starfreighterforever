import React, { Component } from "react";
import Starfieldimg from "./imgs/StarfieldLong.png";



export class Starfield extends Component {
  constructor(props) {
    super(props);
    this.onAnimationIteration = this.onAnimationIteration.bind(this);
    /*this.animationinfinitechange = this.animationinfinitechange.bind(this);*/
    this.startStopAnimation2 = this.startStopAnimation2.bind(this);
    this.onAnimationStart = this.onAnimationStart.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      animationFinished: false,
      showAnimationStartLabel: false,
      popupvisible: true,
    };
  }
  handleChange() {
    this.props.onMotionChange();
  }

  startStopAnimation2() {
    this.props.startStopAnimation()
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
    this.startStopAnimation2();
    console.log("clicked");
  };

  
  onAnimationIteration() {
    
      this.startStopAnimation2();
    
/*
    setTimeout(() => {
      console.log("In Starfield component count = " + this.props.starfieldcount);
    }, 1000); */
  }
  
  render() {
    return (
      <div
        className={`StarfieldClass ${this.props.classNames}`}
        onAnimationEnd={this.onAnimationEnd}
        onAnimationStart={this.onAnimationStart}
        onAnimationIteration={this.onAnimationIteration}
      >
        

        
        <button onClick={() => this.startStopAnimation2()}>
          Start/stop the animation
          {console.log("classNames = " + this.props.classNames)}
        </button>
        
      </div>
    );
  }
}

export default Starfield;
