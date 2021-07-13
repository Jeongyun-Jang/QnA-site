import React from "react";
import styled from "styled-components";
import { Grid } from "./index";


const Input = (props) => {
    const {
      label,
      placeholder,
      _onChange,
      type,
      multiLine,
      value,
      is_submit,
      onSubmit,
    } = props;

    return (
        <React.Fragment>
          <Grid>
              <InputBox type={type} placeholder={placeholder} onChange={_onChange} />
          </Grid>
        </React.Fragment>
      );
}
const InputBox = styled.input`
    ${(props) =>
        props.multiLine
        ? `rows: ${props.rows} `
        : ""}
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
    margin: ${(props)=>props.margin}
`;

export default Input;