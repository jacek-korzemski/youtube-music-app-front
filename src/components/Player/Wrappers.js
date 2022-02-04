import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    width: calc(100% + 60px);
    height: calc(100% + 60px);
    margin: -30px;
    position: relative;

    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1.5fr 0.5fr;
    gap: 0px 0px;
    grid-template-areas:
        "video comments"
        "interactions comments";
    .comments {
        grid-area: comments;
        position: relative;
    }
    .video {
        grid-area: video;
        position: relative;
    }
    .interactions {
        grid-area: interactions;
        position: relative;
    }
`;

export const InteractionsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;

const bump = keyframes`
  0% {transform: scale(1)}
  50% {transform: scale(0.79)}
  100% {transform: scale(1)}
`;

const bump2 = keyframes`
  0% {transform: scale(1)}
  50% {transform: scale(0.81)}
  100% {transform: scale(1)}
`;

export const StarsWrapper = styled.div`
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
            font-size: 36px;
            padding: 0 10px;
            color: white;
            text-shadow: 1px 2px 3px black;
            cursor: pointer;
            &.active {
                color: red;
                animation: ${bump} 0.3s linear forwards;
            }
            &.inactive {
                color: white;
                animation: ${bump2} 0.3s linear forwards;
            }
        }
        &.disabled {
            pointer-events: none;
        }
    }
    p {
        margin: 0;
        color: white;
        text-align: center;
    }
`;

export const GoBackWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    text-shadow: 1px 2px 3px black;
    &:hover {
        color: red;
        animation: ${bump} 0.3s linear forwards;
        p {
            color: white;
        }
    }
    i {
        display: block;
        font-size: 36px;
    }
    p {
        margin: 0;
        color: white;
    }
    &.active {
        color: red;
        animation: ${bump} 0.3s linear forwards;
    }
    &.inactive {
        color: white;
        animation: ${bump2} 0.3s linear forwards;
        &:hover {
            color: red;
            animation: ${bump} 0.3s linear forwards;
        }
    }
`;

export const ReviewsWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    &.no-reviews {
        padding: 30px;
        width: calc(100% - 60px);
        height: calc(100% - 60px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        text-align: center;
        i {
            color: red;
            font-size: 36px;
        }
        p {
            margin: 0;
        }
    }
`;
