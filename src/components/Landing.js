import React, { Component } from "react";
import Styled from "styled-components";
import punch from "../images/punch.png";
import trump from "../images/Trump.png";

const Title = Styled.h1.attrs({
  className: " Roboto  relative top-1 "
})`
@import url(https://fonts.googleapis.com/css?family=Roboto);
font-family: Roboto
`;

const Image = Styled.img.attrs({
  className: "h4 dib relative  left-1"
})``;

const ImageFlip = Styled.img.attrs({
  className: "h4 dib relative  right-1 "
})`
transform: scaleX(-1)
`;

const Trump = Styled.img.attrs({
  className: "br-100  h4 w4 dib"
})``;

const Container = Styled.header.attrs({
  className: "tc bg-orange"
})``;

export default class Landing extends Component {
  render() {
    return (
      <div className="bg-orange">
        <Container>
          <Title>Thump 'a' Trump</Title>
          <ImageFlip src={punch} />
          <Trump src={trump} alt="avatar" />
          <Image src={punch} />
        </Container>
        <div className="tc">
            <p>See how often you can Thump the Trump before he can build the wall</p>
            <a class="f6 grow no-underline  ph3 pv2 mb2 dib white bg-black" href="#0">Play Now!</a>
        </div>
        
      </div>
    );
  }
}

// export default Landing;
