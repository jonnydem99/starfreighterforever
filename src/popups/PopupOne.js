import React, { Component } from 'react';
import GreenTerminal from "../imgs/GreenTerminalBackground.png";
import Button from "react-bootstrap/Button";
import PopupData from "./PopupData";



export class PopupOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }
    render() {
        const style = this.props.popupvisibleCockpitLevel ? {} : {display:'none'};
        console.log("style = " + JSON.stringify({style}))

        const PopUpDataID = this.props.starfieldcountCockpitLevel;

        function PopupText (){
            for (let i = 0; i < PopupData.length; i++) 
            if (PopUpDataID === PopupData[i].id) 
            return PopupData[i].text
          }
/*
          for (let index=0; index < this.PopupData.length; index++) {
            if (items.data[index].itemId === match.params.itemId) {
                setItem(items.data[index]);
                console.log("found match itemId=" + items.data[index].itemId);
                console.log(items.data[index]);
                break;
            }
*/

        return (
            <div className="popupshell" style={style} >
                {console.log("PopupOne popupvisible? = " + this.popupv)}

                

                <p style={{padding: "8%"}}>{PopupText()}</p>
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
