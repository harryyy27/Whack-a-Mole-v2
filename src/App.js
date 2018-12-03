import React, { Component } from 'react';
// import styled from "styled-components"
// import Header from "./components/Header"
import Timer from "./components/Timer"






class App extends Component {
  state = {
    
  }
  
  
  render() {
    return (
      <div className="App">
      {/* <Header /> */}
        <Timer ref="timer"/>
        
      </div>
    );
  }
}

export default App;
