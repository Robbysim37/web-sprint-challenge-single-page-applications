import React from "react"
import styled from "styled-components"

const HelpStyles = styled.div`
display:flex;
justify-content: center;
align-items: center;
font-size: 5rem;
`

const Help = (props) => {
    return(
        <HelpStyles>
            This is the Help info
        </HelpStyles>
    )
}

export default Help