import React, { Component } from 'react';
import Styled from "styled-components"
import punch from "../images/punch.png"


const Title = Styled.h1.attrs({
    className: " raleway dib relative bottom-2 "
})`
@import url(https://fonts.googleapis.com/css?family=Raleway);
font-family: Raleway
`;

const Image = Styled.img.attrs({
    className: "h4 dib relative top-1"
})``;

const ImageFlip = Styled.img.attrs({
    className: "h4 dib relative top-1  "
})`
transform: scaleX(-1)
`;

const Container = Styled.header.attrs({
    className: "tc flex-auto"
})``


export default class Landing extends Component {
    render() {
        return (
            <Container>
                <ImageFlip src={punch}  />
                <Title>Thump 'a' Trump</Title>
                <Image src={punch} />
            </Container>

        )
    }
}

// export default Landing; 