import React, { Component } from 'react';
import styled from 'styled-components';

const Row = styled.div.attrs({
    className: 'dt dt--fixed tc pa2 collapse'
})``;
const Cell = styled.div.attrs({
    className: 'dtc w-100 h4 bg-orange  pr4 outline'
})``;

export default class Grid extends Component {
    render() {
        if(this.props.hasStarted){
            return null;
        }
        else {
        return(
            <div className="mw5 mw7-ns pa3 center bg-gray">
                <Row>
                    <Cell className="bg-orange ma2">1</Cell>
                    <Cell>2</Cell>
                    <Cell>3</Cell>
                </Row>
                <Row>
                    <Cell>4</Cell>
                    <Cell>5</Cell>
                    <Cell>6</Cell>
                </Row>
                <Row>
                    <Cell>7</Cell>
                    <Cell>8</Cell>
                    <Cell>9</Cell>
                </Row>
            </div>
        )
    }
    }
}