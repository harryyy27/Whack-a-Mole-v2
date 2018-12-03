import React, { Component } from 'react';
import Styled from "styled-components"
import punch from "../images/punch.png"


const Title = Styled.h1.attrs({
    className: "tc raleway relative "
})`
@import url(https://fonts.googleapis.com/css?family=Raleway);
font-family: Raleway
`;

const Image = Styled.img.attrs({
    className: ""
})``;


export default class Landing extends Component {
    render() {
        return (
            <div>
                <Title><Image src={punch} />Thump 'a' Trump<Image src={punch} /></Title>
                
            </div>

        )
    }
}

// export default Landing; 