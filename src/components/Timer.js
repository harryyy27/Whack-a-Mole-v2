import React, {Component} from 'react'
import styled from 'styled-components';
const Button = styled.button.attrs({
    className: "f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black center"
  })`
  background: red;
  `
class Timer extends Component {
    state= {
        start: false,
        time: 120,
    }
    startGame = () =>  {
        this.setState((prevState)=>({
            start: !prevState.start
        }));
        let startTime = Date.now();
        this.timer = setInterval(() => {
            
            this.setState((prevState)=>({time: (120000-(Date.now()-startTime))/1000}))
        },0)
      }
      minutes = () => {
          return Math.floor(this.state.time/60);
      }
      seconds = () => {
          return ('00'+ Math.floor(this.state.time%60)).slice(-2);
      }
    
    render() {
        return (
            <div>
                <Button onClick={this.startGame}>Press me</Button>
                
                <p>{this.minutes()}</p>:
                <p>{this.seconds()}</p>
            </div>
        )
    }
}

export default Timer;