import React from 'react'
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import WorkerList from './WorkerList'



export default function RouterWork() {
    // const style = {textDecoration:"none"}
    return (
        <>
        
         <div className="buttonDisplay">
        <button><Link to="/" style={{textDecoration:"none"}}>FirstPage</Link></button>
        <button><Link to="/Contact" style={{textDecoration:"none"}}>Contact</Link></button>
        <button><Link to="/Home" style={{textDecoration:"none"}}>Home</Link></button>
        <button><Link to="/WorkerList" style={{textDecoration:"none"}}>WorkerList</Link></button>
        </div>
  </>
    )
}
