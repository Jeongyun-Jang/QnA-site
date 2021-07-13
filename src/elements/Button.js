import React from "react";
import styled from "styled-components";

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

export default Grid;