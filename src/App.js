import React, { Component } from 'react';
import styled from "styled-components"
import Header from "./Header"



const Button = styled.button.attrs({
  className: "f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black center"
})`
background: red;
`


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>
        <Button>Press me</Button>
      </div>
    );
  }
}

export default App;
