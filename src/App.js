import React, { Component } from "react";
import Landing from "./components/Landing";
// import styled from "styled-components"
// import Header from "./components/Header"
import Grid from "./components/Grid"
import Timer from "./components/Timer";

class App extends Component {
  state = {
    start: false,
    countdown: false,
    countTime: 3,
    time: 120,
    hasStarted: true
  };

  // Timer Functions
  startCountDown = () => {
    this.setState(prevState => ({
      countdown: !prevState.countdown
    }));
    const startCount = Date.now();
    this.countTimer = setInterval(()=>{
      if(Math.ceil(this.state.countTime >0)){
        this.setState(prevState => ({
          countTime: Math.floor((3000 -(Date.now()- startCount)) / 1000 )
        }))
      }
      else {
        this.setState(prevState=>({
          countdown: !prevState.countdown
        }))
       
        this.startGame();
        this.clearTimer(this.countTimer);
      }
    })
    
    
  }
  clearTimer = (timer)=>{
    clearInterval(timer);
  }
  startGame = () => {
    if (this.state.start === false) {
    this.setState(prevState => ({
      start: !prevState.start
    }));
    const startTime = Date.now();
    this.timer = setInterval(() => {
      if (Math.floor(this.state.time > 0)) {
        this.setState(prevState => ({
          time: Math.floor((120000 - (Date.now() - startTime)) / 1000)
        }));
      } else {
        this.setState(prevState => ({
          start: !prevState.start
        }));
        this.clearTimer(this.timer);
      }
    }, 0);
  }
  };
  minutes = () => {
    return Math.floor(this.state.time / 60);
  };
  seconds = () => {
    return ("00" + Math.floor(this.state.time % 60)).slice(-2);
  };

  handleStart = () => {
    console.log("hello");
    this.setState(prevState => ({
      hasStarted: !prevState.hasStarted
    }));
  };

  render() {
    return (
      <div className="App">
        {this.state.hasStarted ? (
          <Landing hasStarted={this.handleStart} />
        ) : (
          <Timer
            ref="timer"
            startCountDown={this.startCountDown}
            startGame={this.startGame}
            minutes={this.minutes}
            seconds={this.seconds}
            time={this.state.time}
          />
          
        )
      
      }
      <Grid
          hasStarted={this.state.hasStarted} 
          />
      </div>
    );
  }
}

export default App;
