import styled from "styled-components";

export const InputWrapper = styled.div`
    position: relative;
    width: calc(100% - 30px);
    input[type="text"] {
        width: calc(100% - 88px);
        font-size: 18px;
        padding: 8px;
        border-radius: 99px 0 0 99px;
        background: white;
        color: black;
        border: 1px solid black;
    }
    .label {
        position: absolute;
        top: -32px;
        left: 15px;
        font-size: 16px;
        color: white;
        font-style: italic;
    }
    &.disabled {
        pointer-events: none;
        opacity: 0.3;
    }
`;

export const SearchWrapper = styled.form`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .search-button {
        position: absolute;
        right: 0;
        top: 6px;
        height: 19px;
        background: red;
        border-radius: 0 99px 99px 0;
        transition: all 0.3s;
    }
    &.disabled {
        pointer-events: none;
        opacity: 0.3;
    }
`;
