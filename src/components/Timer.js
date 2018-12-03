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
        const startTime = Date.now();
        this.timer = setInterval(() => {
            
            if(Math.floor(this.state.time>0)){
            this.setState((prevState)=>({time: (120000-(Date.now()-startTime))/1000}))
            }
            else {
                this.setState((prevState) => ({
                    start: !prevState.start
                }));
                return; 
            }
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
                
                <span>{this.minutes()}</span>:
                <span>{this.seconds()}</span>
            </div>
        )
    }
}

export default Timer;