import React,{useContext} from 'react'
import styled from 'styled-components'
import { UserContext }  from '../Context/UserContext'
const Card = styled.div` 

`
export default function AnimalCard(props) {
   const users = useContext(UserContext)
    // const {Name,Breed,Age,Amount} = props;
    return (
        <>
         {users.map((type)=>
        
         <div className="animalCard">
           
            <h2>Animal Card </h2> 
            <h3>Name: {type.Name}</h3>
            <h3>Breed: {type.Breed}</h3>
            <h3>Age: {type.Age}</h3>
            <h3>Amount: {type.Amount}</h3>

        </div>)}
        </>

    )
}
