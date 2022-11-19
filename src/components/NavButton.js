import React from "react";
import styled from "styled-components"

const ButtonStyles = styled.button`
height: 2.5rem;
width: 7rem;
margin: .5rem;
border-radius: 15px;
font-size: 1.5rem;
${props => props.selected ? 'color:white;' : `color:black;`}
${props => props.selected ? 'background-color:red;' : `background-color:white;`}
`

const Button = (props) => {

    const clickHandler = () => {
        props.setSelected(props.name)
    }

    return (
        <ButtonStyles onClick={clickHandler} selected={props.selected}>{props.children}</ButtonStyles>
    )
}

export default Button