import React from "react"
import styled from "styled-components"

const ButtonStyles = styled.button`
height:2rem;
width:6rem;
`

const Button = (props) => {
    return(
        <ButtonStyles>{props.children}</ButtonStyles>
    )
}

export default Button