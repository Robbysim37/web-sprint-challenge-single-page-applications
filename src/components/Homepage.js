import React from "react"
import pizza from "../assets/Pizza.jpg"
import styled from "styled-components"
import {Link} from "react-router-dom"

const PizzaStyle = styled.div`
margin:auto;
height:50vh;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
`

const TextStyles = styled.p`
font-size: 3rem;
padding:10px;
background-color: rgb(255,255,255,0.8);
border-radius:15px;
`

const Homepage = () => {
    return(
    <PizzaStyle style={{ backgroundImage: `url(${pizza})` }}>
        <TextStyles>Your favorite food, delivered while coding!</TextStyles>
        <Link id="order-pizza" to="/pizza" children={<button>Order Now!</button>}/>
    </PizzaStyle>
    )
}

export default Homepage