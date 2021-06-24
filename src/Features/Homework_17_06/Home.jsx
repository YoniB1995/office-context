import React from 'react'
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import styled from 'styled-components'

export default function Home() {
    return (
        <div className="HomePage">
            <img src="images/officeOne.jpg" alt="" srcset="" height="300px" />
            <img src="images/officeThree.jpeg" alt="" srcset=""height="300px" />
            
            <h2>Welcome Back!</h2>
        </div>
    )
}
