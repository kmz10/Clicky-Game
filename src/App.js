import React, { Component } from 'react';
import Headline from '../src/components/Headline';
import Instructions from './components/Instructions';
import CharCard from "./components/characterCard";
import Footer from "./components/Footer";
import dbzChar from './characters.json';
import './App.css';


  


class App extends Component {

  state = {
    dbzChar,
    clickedChar: [],
    score: 0
  };

  imageClick = event => {
    const currentChar = event.target.alt;
    const CharAlreadyClicked =
      this.state.clickedChar.indexOf(currentChar) > -1;
  
      if (CharAlreadyClicked) {
        this.setState({
          dbzChar: this.state.dbzChar.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedChar: [],
          score: 0
        });
          alert("You lose. Even Yamcha Would had Won... Play again?");

      
        } else {
          this.setState(
            {
              dbzChar: this.state.dbzChar.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedChar: this.state.clickedChar.concat(
                currentChar
              ),
              score: this.state.score + 1
            },


        () => {
            if (this.state.score === 12) {
            alert("You are a true Super Saiyan! You Win!");
            this.setState({
              dbzChar: this.state.dbzChar.sort(function(a, b) {
            return 0.5 - Math.random();
             }),
             clickedChar: [],
             score: 0
              });
            }
          }
        );
      }
    };



render() {
    return (
      <div>

        <Headline 
          score={this.state.score}
        />
        
        <Instructions/>
        
       <div className="columns">
          {this.state.dbzChar.map(dbzChar => (
            <CharCard
              imageClick={this.imageClick}
              id={dbzChar.id}
              key={dbzChar.id}
              image={dbzChar.image}
            />
          ))}
    
    </div>
  
        <Footer/>
      </div>
    

      
    );
  }
}

export default App;
