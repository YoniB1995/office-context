import React ,{useContext,useState} from 'react'
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import styled from 'styled-components'

const CardStyle = styled.div` 
border: 1px solid black;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius:25px;
height:300px;
box-shadow:2px 2px 2px black;

`

export default function WorkerCard(props) {
        
        const [style,setStyle] = useState({display:"block",cardVisible:true})

        const userCard = props.userCard
       
        
    return (
        <CardStyle >
            <h1>Full Name: {userCard.fName+" "+ userCard.lName}</h1>
            <h3>Email: {userCard.mail}</h3>
            <h3>Year Birth: {userCard.yearBirth}</h3>
            <h3>Phone Num: {userCard.phoneNum}</h3>
        
        </CardStyle>
    ) 
}
