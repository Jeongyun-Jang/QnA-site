import React, { Fragment } from "react";
//import { Grid, Image, Text, Button } from "../elements";
//import { HeartButton } from "./index";

import { history } from "../redux/configureStore";
import styled from "styled-components";

import { useDispatch,useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Post = React.memo((props) => {
    const dispatch = useDispatch();
    return (
    <React.Fragment>
    <Grid padding="10px" is_flex>
        <Grid padding="16px">    
            <Text>제목: {props.title} </Text>
            <Text>글쓴이: {props.author} </Text>
            <Text>내용: {props.comment}</Text>
            <Text><br /></Text>
        </Grid>
    </Grid>
    </React.Fragment>
    )
});


  export default Post;

  
const Text= styled.p`
color: ${(props) => props.color};
font-size: ${(props) => props.size};
font-weight: ${(props) => (props.bold? "600" : "400")};
${(props) => (props.margin? `margin: ${props.margin};` : '')}
`;


const Grid = styled.div`
width: ${(props) => props.width};
height: 100%;
box-sizing: border-box;
${(props) => (props.padding ? `padding: ${props.padding};` : "")}
${(props) => (props.margin ? `margin: ${props.margin};` : "")}
${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
${(props) =>
  props.is_flex
    ? `display: flex; align-items: center; justify-content: space-between; `
    : ""}
${(props) => props.center? `text-align: center;`: ""}
`;


const Button=styled.button`

    width: ${(props) => props.width};
    background-color: #212121;
    color: #ffffff;
    padding: ${(props) => props.padding};
    box-sizing: border-box;
    border: none;
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`