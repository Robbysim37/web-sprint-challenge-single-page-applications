import React, {useState} from "react"
import styled from "styled-components"
import Button from "./NavButton"
import {Link} from "react-router-dom"

const HeaderStyles = styled.div`
color: red;
display: flex;
justify-content: space-around;
align-items: center;
background-color: lightgrey;
`

const Header = (props) => {

    const [homeSelected,setHomeSelected] = useState(true)
    const [helpSelected,sethelpelected] = useState(false)

    const setSelected = (name) => {
        if(name ==="home"){
            setHomeSelected(true)
            sethelpelected(false)
        }
        if(name ==="help"){
            setHomeSelected(false)
            sethelpelected(true)
        }
    }

    return (
        <HeaderStyles>
            <h1>Bloomtech Pizza</h1>
            <div>
                <Link to="/" children={<Button name="home" selected={homeSelected} setSelected={setSelected}>Home</Button>}></Link>
                <Link to="/help" children={<Button name="help"selected={helpSelected} setSelected={setSelected}>Help</Button>}></Link>
            </div>
        </HeaderStyles>
    )
}

export default Header