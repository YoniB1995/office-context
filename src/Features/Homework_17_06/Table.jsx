import React ,{useContext , useState} from 'react'
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import { UserContext , UserProvider } from '../../Context/UserContext'
import Input from './Input'
import styled from 'styled-components'
import WorkerCard from './WorkerCard'

const TdVisible = styled.td`
position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
`

const TdSpanHidden = styled.th` 
visibility: hidden;
 width: 120px ;
 background-color:black;
 color: #fff;
 text-align: center ;
 border-radius: 6px;
 padding: 5px 0;
 position: absolute;
 z-index: 1;

 :hover{
      visibility: visible;
 }
`

const StyledTable = styled.table`
margin: 30px;


`

export default function Table(props) {
    // const workersList = useContext(UserContext).workersList
    const workerList = props.workerList
    const newYear = new Date().getFullYear();
    const [style,setStyle] = useState({display:"block",cardVisible:true})
    const [userCard,setUserCard] = useState({fName:"",lName:"",yearBirth:"",phoneNum:"",mail:""})

    function changeHandler(e){
        setUserCard({[e.target.value]:e.target.name})
    }

    function getUserCard (){
        setStyle({display:"none",cardVisible:false})
    }
    return (
       
        <Router>
            
        <StyledTable className="tooltip" style={style}>
            <tr>
                <th>Full Name</th>
                <th>Age</th>
                <th className="tooltiptext">Phone Num</th>
                <th className="tooltiptext1">Email</th>
            </tr>
            {workerList.map((worker,i)=> 
            
            <tr>
                <td><input type="text" name="fName" value={`${worker.fName} ${worker.lName}`} onClick={getUserCard} onChange={changeHandler} key={i}/></td>
                <td>{newYear-worker.yearBirth}</td>
                <td className="tooltiptext">{worker.phoneNum}</td>
                <td className="tooltiptext1">{worker.mail}</td>
            </tr> )}
            <tr>
                <td>{userCard.fName}</td>
                <td>{userCard.lName}</td>
                <td>{userCard.age}</td>
                <td>{userCard.phoneNum}</td>
            </tr>
             
        </StyledTable>
        
{style.cardVisible?  null:  <WorkerCard userCard={userCard} setStyle={setStyle}/>}
        </Router>
           )}
            
