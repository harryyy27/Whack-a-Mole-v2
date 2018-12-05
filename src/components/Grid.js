import React, { Component } from 'react';
import styled from 'styled-components';

const Row = styled.div.attrs({
    className: 'dt dt--fixed'
})``;
const Cell = styled.div.attrs({
    className: 'dtc w-25 vh-25 tc'
})``;
export default class Grid extends Component {
    render() {
        if(this.props.hasStarted){
            return null;
        }
        else {
        return(
            <div>
                <Row>
                    <Cell>1</Cell>
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