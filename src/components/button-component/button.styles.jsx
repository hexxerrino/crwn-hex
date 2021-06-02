import styled from "styled-components"

const constructButton = (props) => {
    if (props.google) {return googledButton}
    if (props.inverted) {return invertedButton}
    return normalButton
}

const normalButton = `
    background-color: black;
    color: white;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`
const baseButton = `
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
        border: 1px solid black;
    }
`
const googledButton = `
    background-color: #4285f4;
    color: white;

    &:hover {
        background-color: #357ae8;
        border: none;
    }
`
const invertedButton = `
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }
`
export const CustomButton = styled.button`
    ${baseButton}
    ${constructButton}
`