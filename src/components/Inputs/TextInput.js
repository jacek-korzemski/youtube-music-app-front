import React from "react";
import { InputWrapper } from "./Wrappers";

const TextInput = (props) => {
    return (
        <InputWrapper>
            <input type="text" onChange={props.onChange} value={props.value} />
            <p className="label">{props.label}</p>
        </InputWrapper>
    );
};

export default TextInput;
