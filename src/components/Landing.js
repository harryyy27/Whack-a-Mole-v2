import React, { Component } from 'react';
import Styled from "styled-components"
import punch from "../images/punch.png"
import trump from "../images/Trump.png"

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

const Container = Styled.header.attrs({
    className: "tc bg-light-gray"
})``


export default class Landing extends Component {
    render() {
        return (
            <div>
                <Container>
                   
                   <Title>Thump 'a' Trump</Title>
                    <ImageFlip src={punch} />
                                        <img
                                            src={trump}
                                            className="br-100  h4 w4 dib " alt="avatar" />

                    <Image src={punch} />

                   
                </Container>
                
            </div>
        )
    }
}

// export default Landing; 