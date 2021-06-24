import React from 'react'
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import HomePage from '../../Pages/HomePage'
import AnimalCard from '../AnimalCard'
import InfoAnimals from '../InfoAnimals'


export default function AppRouter() {
    return (
        <>
        <Route  path="/Table" component={HomePage}></Route>
         <Route path="/AnimalsWiki" component={InfoAnimals}/>
         <Route path="/AnimalsCard" component={AnimalCard}/>
         <Route exact path="/" />
        <button><Link to="/">Empty</Link></button>
        <button><Link to="/Table">Table</Link></button>
        <button><Link to="/AnimalsWiki">Animals Wiki</Link></button>
        <button><Link to="/AnimalsCard">Animal Card</Link></button>
  </>
    )
}
