import './App.css';
import React from "react";
import starfieldbottom from "./imgs/Starfieldbottom.png";
import Col from 'react-bootstrap/Col';
import Cockpit from "./Cockpit"
import Starfield from "./Starfield"
import Starfieldbase from "./Starfieldbase"

function App() {
  return (
    <div className="starfieldbottom" style={{ backgroundImage: `url(${starfieldbottom})` }}>
      <Starfieldbase />
      <Starfield />
      <Cockpit />
    </div>
  );
}

export default App;