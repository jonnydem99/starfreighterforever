import React, { Component } from "react";
import Starfieldimg from "./imgs/StarfieldLong.png";



export class Starfield extends Component {
  constructor(props) {
    super(props);
    /*this.onAnimationIteration = this.onAnimationIteration.bind(this);*/
    /*this.animationinfinitechange = this.animationinfinitechange.bind(this);*/
    this.startStopAnimation = this.startStopAnimation.bind(this);
    this.onAnimationStart = this.onAnimationStart.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      classNames: "",
      animationFinished: false,
      showAnimationStartLabel: false,
      popupvisible: true,
    };
  }
  handleChange() {
    this.props.onMotionChange();
  }

  startStopAnimation() {
    const { classNames } = this.state;

    this.handleChange();

    this.setState({ classNames: classNames ? "" : "animation" });
    
    
    setTimeout(() => {
      console.log("classNames = " + this.state.classNames + " popupvisible = " + this.state.popupvisible);
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

  /*
  onAnimationIteration() {
    const starfieldcount = this.props.starfieldcount;
    
      this.startStopAnimation();
    

    setTimeout(() => {
      console.log("In Starfield component count = " + this.props.starfieldcount);
    }, 1000);
  }
  */
  render() {
    return (
      <div
        className={`StarfieldClass ${this.state.classNames}`}
        onAnimationEnd={this.onAnimationEnd}
        onAnimationStart={this.onAnimationStart}
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
