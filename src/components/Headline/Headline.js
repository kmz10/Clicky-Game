import React, { Component } from 'react';
import './headlinestyle.css';





class Headline extends Component {
  render() {
    return (
      <div>

  
  <div className="navbar">
      <div className="logo"><h3>Clicky Game</h3></div>
      <div className="titleAction"><h3>Click a Image to Begin</h3></div>
      <div id="scoreBoard" >
          <span className="urScore"><h3>Your Score:{this.props.score}</h3></span>
          </div>
      

  </div>
   
          </div>


    
    );
  }
}

export default Headline;
