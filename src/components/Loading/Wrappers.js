import styled from "styled-components";

export const LoadingWrapper = styled.div`
    .loading-wrapper {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .loading-wrapper .dot-falling {
        position: relative;
        left: -9999px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: white;
        color: white;
        -webkit-box-shadow: 9999px 0 0 0 white;
        box-shadow: 9999px 0 0 0 white;
        -webkit-animation: dotFalling 1s infinite linear;
        animation: dotFalling 1s infinite linear;
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s;
    }

    .loading-wrapper .dot-falling::before,
    .loading-wrapper .dot-falling::after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
    }

    .loading-wrapper .dot-falling::before {
        width: 10px;
        height: 10px;
        border-radius: 5px;
        margin-left: -10px;
        background-color: white;
        color: white;
        -webkit-animation: dotFallingBefore 1s infinite linear;
        animation: dotFallingBefore 1s infinite linear;
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
    }

    .loading-wrapper .dot-falling::after {
        width: 10px;
        height: 10px;
        margin-left: 10px;
        border-radius: 5px;
        background-color: white;
        color: white;
        -webkit-animation: dotFallingAfter 1s infinite linear;
        animation: dotFallingAfter 1s infinite linear;
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
    }

    @-webkit-keyframes dotFalling {
        0% {
            -webkit-box-shadow: 9999px -15px 0 0 rgba(152, 128, 255, 0);
            box-shadow: 9999px -15px 0 0 rgba(152, 128, 255, 0);
        }
        25%,
        50%,
        75% {
            -webkit-box-shadow: 9999px 0 0 0 white;
            box-shadow: 9999px 0 0 0 white;
        }
        100% {
            -webkit-box-shadow: 9999px 15px 0 0 rgba(152, 128, 255, 0);
            box-shadow: 9999px 15px 0 0 rgba(152, 128, 255, 0);
        }
    }

    @keyframes dotFalling {
        0% {
            -webkit-box-shadow: 9999px -15px 0 0 rgba(152, 128, 255, 0);
            box-shadow: 9999px -15px 0 0 rgba(152, 128, 255, 0);
        }
        25%,
        50%,
        75% {
            -webkit-box-shadow: 9999px 0 0 0 white;
            box-shadow: 9999px 0 0 0 white;
        }
        100% {
            -webkit-box-shadow: 9999px 15px 0 0 rgba(152, 128, 255, 0);
            box-shadow: 9999px 15px 0 0 rgba(152, 128, 255, 0);
        }
    }

    @-webkit-keyframes dotFallingBefore {
        0% {
            -webkit-box-shadow: 9984px -15px 0 0 rgba(152, 128, 255, 0);
            box-shadow: 9984px -15px 0 0 rgba(152, 128, 255, 0);
        }
        25%,
        50%,
        75% {
            -webkit-box-shadow: 9984px 0 0 0 white;
            box-shadow: 9984px 0 0 0 white;
        }
        100% {
            -webkit-box-shadow: 9984px 15px 0 0 rgba(152, 128, 255, 0);
            box-shadow: 9984px 15px 0 0 rgba(152, 128, 255, 0);
        }
    }

    @keyframes dotFallingBefore {
        0% {
            -webkit-box-shadow: 9984px -15px 0 0 rgba(152, 128, 255, 0);
            box-shadow: 9984px -15px 0 0 rgba(152, 128, 255, 0);
        }
        25%,
        50%,
        75% {
            -webkit-box-shadow: 9984px 0 0 0 white;
            box-shadow: 9984px 0 0 0 white;
        }
        100% {
            -webkit-box-shadow: 9984px 15px 0 0 rgba(152, 128, 255, 0);
            box-shadow: 9984px 15px 0 0 rgba(152, 128, 255, 0);
        }
    }

    @-webkit-keyframes dotFallingAfter {
        0% {
            -webkit-box-shadow: 10014px -15px 0 0 rgba(152, 128, 255, 0);
            box-shadow: 10014px -15px 0 0 rgba(152, 128, 255, 0);
        }
        25%,
        50%,
        75% {
            -webkit-box-shadow: 10014px 0 0 0 white;
            box-shadow: 10014px 0 0 0 white;
        }
        100% {
            -webkit-box-shadow: 10014px 15px 0 0 rgba(152, 128, 255, 0);
            box-shadow: 10014px 15px 0 0 rgba(152, 128, 255, 0);
        }
    }

    @keyframes dotFallingAfter {
        0% {
            -webkit-box-shadow: 10014px -15px 0 0 rgba(152, 128, 255, 0);
            box-shadow: 10014px -15px 0 0 rgba(152, 128, 255, 0);
        }
        25%,
        50%,
        75% {
            -webkit-box-shadow: 10014px 0 0 0 white;
            box-shadow: 10014px 0 0 0 white;
        }
        100% {
            -webkit-box-shadow: 10014px 15px 0 0 rgba(152, 128, 255, 0);
            box-shadow: 10014px 15px 0 0 rgba(152, 128, 255, 0);
        }
    }
`;
