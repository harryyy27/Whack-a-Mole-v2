import React, { Component } from "react";
import styled from "styled-components";
const Button = styled.button.attrs({
    className:
        "f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black center"
})`
  background: red;
`;
export default class Timer extends Component {
    render() {
    
        return (
            <div className="tc">
                <Button onClick={()=>{this.props.startCountDown()}}>Press me</Button>
                <span>{this.props.minutes()}</span>:<span>{this.props.seconds()}</span>
            </div>
        );
    }
}
