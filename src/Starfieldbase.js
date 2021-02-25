import React, { Component } from 'react';

import Background from "./imgs/starfield2.png";

export class Starfieldbase extends Component {
    render() {
        return (
            <div className="backgroundimg" style={{ backgroundImage: `url(${Background})` }}>
            
            </div>
        )
    }
}

export default Starfieldbase
