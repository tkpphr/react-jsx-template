import * as React from "react";
import styled from "styled-components";

const ColorDiv=styled.div`
    width:400px;
    height:400px;
    background:lightgray;
`;

const ColorButton=styled.button`
    background:pink;
`;

const Counter=styled.p`
    color:blue;
`;

export default class TestModule extends React.Component{

    constructor(props){
        super(props);
        this.state={count:0};
    }

    render(){
        return (
            <ColorDiv>
                <ColorButton onClick={this.onClick.bind(this)}>{this.props.content}</ColorButton>
                <Counter>Clicked : {this.state.count}</Counter>
            </ColorDiv>
        );
    }

    onClick(){
        this.setState({count:(this.state.count+1)});
    }

}