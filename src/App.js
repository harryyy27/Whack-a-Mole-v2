import React, { Component } from "react";
import Landing from "./components/Landing";
// import styled from "styled-components"
// import Header from "./components/Header"
import Timer from "./components/Timer";

class App extends Component {
  state = {
    start: false,
    time: 120,
    hasStarted: true,
    internalTime: 0
  };

  // Timer Functions
  startGame = () => {
    if (this.state.start === false) {
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
            start: !prevState.start // User this later instead of "hasStarted" to conditionally render
          }));
          return;
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

  // Internal timer // 

  internalTimer = () => {
    let timeLeft = Math.floor(Math.random() * (2) + 1);
    if (this.state.internalTime === 0) {
      this.setState({
        internalTime: timeLeft
      })
    } else if (this.state.internalTime !== 0) {
     const decrement= setInterval(() => {
        this.setState({
          internalTime: this.state.internalTime - 1
        })
      }, 1000) 
      if (this.state.internalTime === 0 ) {
        const stopCount = () => {clearInterval(decrement)}
      }
    }

    // if (timeLeft === 0) {
    //   console.log("Time is zero")
    // } else if (timeLeft !== 0){
    //   setInterval(() => {
    //     timeLeft--;
    //   }, 1000)
    //   console.log(timeLeft)
    // }

  }

  render() {
    return (
      <div className="App">
        {this.state.hasStarted ? (
          <Landing hasStarted={this.handleStart} />
        ) : (
          <Timer
            ref="timer"
            startGame={this.startGame}
            minutes={this.minutes}
            seconds={this.seconds}
            time={this.state.time}
            internal={this.internalTimer}
          />
        )}
      </div>
    );
  }
}

export default App;
