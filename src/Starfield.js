import React, { Component } from 'react';
import Starfieldimg from './imgs/StarfieldLong.png';

export class Starfield extends Component {
    render() {
        return (
            <div className="StarfieldClass" style={{ backgroundImage: `url(${Starfieldimg})` }}>
            
            </div>
        )
    }
}

export default Starfield
