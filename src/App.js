import React, { Component } from "react";
import Landing from "./components/Landing";
// import styled from "styled-components"
// import Header from "./components/Header"
import Timer from "./components/Timer";

class App extends Component {
  state = {
    start: false,
    time: 120,
    hasStarted: true
  };

  // Timer Functions
  startGame = () => {
    this.setState(prevState => ({
      start: !prevState.start
    }));
    const startTime = Date.now();
    this.timer = setInterval(() => {
      if (Math.floor(this.state.time > 0)) {
        this.setState(prevState => ({
          time: (120000 - (Date.now() - startTime)) / 1000
        }));
      } else {
        this.setState(prevState => ({
          start: !prevState.start
        }));
        return;
      }
    }, 0);
  };
  minutes = () => {
    return Math.floor(this.state.time / 60);
  };
  seconds = () => {
    return ("00" + Math.floor(this.state.time % 60)).slice(-2);
  };

  handleStart = () => {
    console.log('hello')
    this.setState(prevState => ({
      hasStarted: !prevState.hasStarted
    }));
  };


  render() {
    return (
      <div className="App">
      {this.state.hasStarted ?  <Landing hasStarted={this.handleStart} />: <Timer
          ref="timer"
          startGame={this.startGame}
          minutes={this.minutes}
          seconds={this.seconds}
          time={this.state.time}
        />  }        
      </div>
    );
  }
}

export default App;
