import React, { Component } from 'react'
import GreenTerminal from "../imgs/GreenTerminalBackground.png"
import Button from "react-bootstrap/Button";


export class PopupOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            starfieldcount: 0,
            popupvisible: true,
        }

    }
    render() {
        const style = this.state.popvisible ? {display:'none'} : {};
        console.log("style = " + JSON.stringify({style}))
        return (
            <div className="popupshell" style={style} >
                <p style={{padding: "8%"}}>this is a popup. this is a popup. this is a popup.</p>
                <Button
          onClick={() => this.animationinfinitechange()}
        >
          Next Level
        </Button>
                
            </div>
        )
    }
}

export default PopupOne
