import React from "react";
import TextInput from "./TextInput";
import Button from "components/Button/Button";
import { SearchWrapper } from "./Wrappers";

const Search = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        props.onSubmit();
    };

    return (
        <SearchWrapper onSubmit={(e) => onSubmit(e)} className={props.disabled ? "disabled" : ""}>
            <TextInput value={props.value} onChange={props.onChange} label={props.label} />
            <Button onClick={props.onSubmit} className="search-button">
                Search
            </Button>
        </SearchWrapper>
    );
};

export default Search;
