import React, { Component } from 'react';
import Button from "react-bootstrap/Button";

class One extends Component {
    constructor(props) {
        super(props);
        this.startStopAnimation7 = this.startStopAnimation7.bind(this);
        this.state = {};
      }
    startStopAnimation7() {
        this.props.startStopAnimation6();
      }
    render() {
        return (
            <div>
                <Button
        onClick={() => this.startStopAnimation7()}
      >
        Proceed
      </Button>
            </div>
        )
    }
}

export default One