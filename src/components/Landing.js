import React, { Component } from 'react';
import Styled from "styled-components"
import punch from "../images/punch.png"
import trump from "../images/Trump.png"

const Title = Styled.h1.attrs({
    className: " raleway dib relative bottom-2 "
})`
@import url(https://fonts.googleapis.com/css?family=Raleway);
font-family: Raleway
`;

const Image = Styled.img.attrs({
    className: "h4 dib relative top-1 left-1"
})``;

const ImageFlip = Styled.img.attrs({
    className: "h4 dib relative top-1 right-1 "
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
                    <ImageFlip src={punch} />
                    <Title>Thump 'a' Trump</Title>
                    <Image src={punch} />

                    <div className="relative bottom-2 ">
                                        <img
                                            src={trump}
                                            className="br-100  h4 w4 dib " alt="avatar" />

                                    </div>
                </Container>
                
            </div>
        )
    }
}

// export default Landing; 