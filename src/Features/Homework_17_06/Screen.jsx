import React , {useState} from 'react'
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom'
import styled from 'styled-components'
import ButtonComp from './ButtonComp'
import Table from './Table'
import Input from './Input'
import Home from './Home'
import WorkerList from './WorkerList'
import { UserProvider } from '../../Context/UserContext'
import RouterWork from './RouterWork'
import Contact from './Contact'


export default function Screen() {
    const workers = [
        {fName:"Yoni",lName:"Bitew",yearBirth:1995,phoneNum:"0538276526",mail:"yonatansamfisher@gmail.com"},
        {fName:"Dani",lName:"Almayo",yearBirth:1990,phoneNum:"05252525434",mail:"dani@gmail.com"},
        {fName:"Ronie",lName:"Yaaso",yearBirth:1997,phoneNum:"052727425",mail:"ronie@gmail.com"},
        {fName:"Yarin",lName:"Kinda",yearBirth:2000,phoneNum:"0524242547",mail:"tarin@gmail.com"},
        {fName:"Kesem",lName:"Randle",yearBirth:2001,phoneNum:"0524242424",mail:"randle@gmail.com"},
        {fName:"michal",lName:"faerda",yearBirth:1995,phoneNum:"0528444487",mail:"michal@gmail.com"},
        {fName:"salamon",lName:"avarahm",yearBirth:1990,phoneNum:"0528524511",mail:"salamon@gmail.com"},
        {fName:"baruch",lName:"avi",yearBirth:1995,phoneNum:"0522222585",mail:"baruch@gmail.com"},
        {fName:"yoav",lName:"azaria",yearBirth:1999,phoneNum:"0521121215",mail:"yoav@gmail.com"},
        {fName:"dani",lName:"yossef",yearBirth:1995,phoneNum:"05151522525",mail:"dani@gmail.com"}
        
    ]
    

    const [workersList,setWorkersList] = useState(workers)
    return (
        <div className="boxScreen">
            <Router>
            <UserProvider value={{workersList,setWorkersList}}>
            <header className="HeaderBackground"><RouterWork/></header>
            <div className="container">
            <Switch> 
            <Route  path="/WorkerList" component={WorkerList}></Route>
            <Route exact path="/" />
            <Route path="/Contact" component={Contact}/>
            <Route exact path="/Home" component={Home}/>
            <Route path="*"> Error , Page is not Loaded </Route>
            
            
            </Switch>
            </div>
            <footer className="HeaderBackground"> Yoni_B</footer> 
            </UserProvider>

            
             </Router>
        </div>
    )
}
