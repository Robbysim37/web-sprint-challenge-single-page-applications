import React,{useState,useEffect} from "react"
import styled from "styled-components"
import axios from "axios"
import * as yup from "yup"

const schema = yup.object().shape({
    name:yup.string().min(2,"name must be at least 2 characters"),
    size:yup.string().oneOf(["small","medium","large","xtraLarge"],"Please select your pizza size"),
    special:yup.string(),
    pepperoni:yup.string(),
    bacon:yup.string(),
    ham:yup.string(),
    sausage:yup.string(),
    blackOlives:yup.string(),
    pineapple:yup.string(),
    anchovies:yup.string(),
    threeCheese:yup.string(),
    peppers:yup.string(),
    extraCheese:yup.string(),
})

const FormStyle = styled.form`
display:flex;
flex-direction:column;
margin: auto;
width: 50vw;
background-color: lightgrey;
`
const InputStyles = styled.input`
width: 25%;
margin-left: 1rem;
margin-right: 1rem;
${props => props.id === "special-text" ? "margin-bottom: 1rem;" : null}
`

const SelectStyles = styled.select`
width: 25%;
margin-left: 1rem;
margin-right: 1rem;
`

const PromptStyles = styled.div`
background-color: lightgrey;
font-size: 2rem;
padding: .5rem;
`

const ToppingsColumnStyles = styled.div`
display: flex; 
flex-direction: column;
margin-left: 1rem;
margin-right: 1rem;
`

const ToppingsStyles =styled.div`
display: flex;
`

const pizzaForm = {
    name:"",
    size:"0",
    pepperoni:false,
    bacon:false,
    ham:false,
    sausage:false,
    blackOlives:false,
    pineapple:false,
    anchovies:false,
    threeCheese:false,
    peppers:false,
    extraCheese:false,
    special:""
}

const Form = (props) => {
    const [form, setForm] = useState(pizzaForm)
    const [formErrors, setFormErrors] = useState({name:"",size:""})
    const [buttonDisabled,setButtonDisabled] = useState(true)

    const errorHandler = (keyName,value) => {
        yup.reach(schema,keyName).validate(value)
        .then(()=> setFormErrors({...formErrors,[keyName]:""}))
        .catch(err => setFormErrors({...formErrors,[keyName]:err.errors[0]}))
    }

    const formChangeHandler = (e) => {
        const valueToUse = e.target.type === "checkbox" ? e.target.checked : e.target.value
        errorHandler(e.target.name,valueToUse)
        setForm({...form,[e.target.name]:valueToUse})    
    }

    useEffect(() => {
        schema.isValid(form).then((valid) => setButtonDisabled(!valid))
    },[form])

    const formSubmitHandler = (e) => {
        e.preventDefault()
        axios.post(`https://reqres.in/api/orders`,form)
        .then(res => {
            console.log(res.data)
        })
    }
    return(
        
        <FormStyle id="pizza-form" onSubmit={formSubmitHandler}>
            <div>{formErrors.name}</div>
            <PromptStyles>Name for the order</PromptStyles>
            <InputStyles name="name" value={form.name} onChange={formChangeHandler} id="name-input" type="text" placeholder="Name"></InputStyles>
            <PromptStyles>Choose your size</PromptStyles>
            <SelectStyles name="size" onChange={formChangeHandler} id="size-dropdown">
                <option value="0">--Select--</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="xtraLarge">Xtra-Large</option>
            </SelectStyles>
            <PromptStyles>Choose your toppings</PromptStyles>
            <ToppingsStyles>
                <ToppingsColumnStyles>
                    <label><input id="pepperoni" name="pepperoni" checked={form.pepperoni} onChange={formChangeHandler} type="checkbox"></input>Pepperoni</label>
                    <label><input id="bacon" name="bacon" checked={form.bacon} onChange={formChangeHandler} type="checkbox"></input>Bacon</label>
                    <label><input id="ham" name="ham" checked={form.ham} onChange={formChangeHandler} type="checkbox"></input>Ham</label>
                    <label><input id="sausage" name="sausage" checked={form.sausage} onChange={formChangeHandler} type="checkbox"></input>Sausage</label>
                    <label><input id="blackOlives" name="blackOlives" checked={form.blackOlives} onChange={formChangeHandler} type="checkbox"></input>Black Olives</label>
                </ToppingsColumnStyles>
                <ToppingsColumnStyles>
                    <label><input id="pineapple" name="pineapple" checked={form.pineapple} onChange={formChangeHandler} type="checkbox"></input>Pineapple</label>
                    <label><input id="anchovies" name="anchovies" checked={form.anchovies} onChange={formChangeHandler} type="checkbox"></input>Anchovies</label>
                    <label><input id="threeCheese" name="threeCheese" checked={form.threeCheese} onChange={formChangeHandler} type="checkbox"></input>Three Cheese</label>
                    <label><input id="peppers" name="peppers" checked={form.peppers} onChange={formChangeHandler} type="checkbox"></input>Peppers</label>
                    <label><input id="extraCheese" name="extraCheese" checked={form.extraCheese} onChange={formChangeHandler} type="checkbox"></input>Extra Cheese</label>
                </ToppingsColumnStyles>
            </ToppingsStyles>
            <PromptStyles>Special Instructions</PromptStyles>
            <InputStyles name="special" id="special-text" type="text" onChange={formChangeHandler}></InputStyles>
            <button disabled={buttonDisabled} id="order-button" type="submit">Add to Order</button>
        </FormStyle>
    )
}

export default Form