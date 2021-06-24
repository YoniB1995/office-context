import React , {useState,useContext} from 'react'
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import { UserProvider } from '../../Context/UserContext'
import Table from './Table'
import { UserContext } from '../../Context/UserContext'
import styled from 'styled-components'
import WorkerCard from './WorkerCard'

const WorkerListPage = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const StyledTable = styled.table`
margin: 30px;
`

const FormStyle = styled.form` 
display:flex;
justify-content: center;
flex-direction: column;
`

export default function WorkerList() {
const workersList = useContext(UserContext).workersList;
const [workerList,setWorkersList] = useState(workersList)
const [allWorkers, setAllWorkers] = useState({ fName: "", lName: "", yearBirth: "", phoneNum: "", mail: "" })
const newYear = new Date().getFullYear();
    const [style,setStyle] = useState({display:"block",cardVisible:true})
    const [userCard,setUserCard] = useState({fName:"",lName:"",yearBirth:"",phoneNum:"",mail:""})

    function changeHandler(e){
        setAllWorkers({[e.target.value]:e.target.name})
    }

    function getUserCard (e){
        console.log(e.target.value);
        
        workersList.map((worker,i)=>{
          if (e.target.value == worker.fName + " " + worker.lName){
          setUserCard({fName:worker.fName,lName:worker.lName,yearBirth:worker.yearBirth,phoneNum:worker.phoneNum,mail:worker.mail})
        }
        setStyle({display:"none",cardVisible:false})
        })
        
    }


  function HandleChange(e){
    setAllWorkers({...allWorkers,[e.target.name]:e.target.value})
  }

  

  function AddToArray() {
        setWorkersList([...workerList, allWorkers])
    }
    return (
        <WorkerListPage>
            <h1>Workers List</h1>
            <FormStyle>
            <label htmlFor="text">Full Name:
         <input type="text" name="fName" id=""  onChange={HandleChange}/>
           </label> 
        <label htmlFor="text">Year Birth:
        <input type="number" name="yearBirth" id="" onChange={HandleChange} />
                   </label> 
        <label htmlFor="text">Phone Num:
        <input type="number" name="phoneNum" id="" onChange={HandleChange} />
                   </label> 
           <label htmlFor="text">Email:
         <input type="email" name="mail" id="" onChange={HandleChange}/>
           </label> 
           <button type="button" onClick={AddToArray}>Add Worker</button>
           </FormStyle>
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
                <td>{allWorkers.fName} {workerList.lName}</td>
                <td>{newYear-allWorkers.yearBirth}</td>
                <td className="tooltiptext">{allWorkers.phoneNum}</td>
                <td className="tooltiptext1">{allWorkers.mail}</td>
            </tr>
             
        </StyledTable>
{style.cardVisible?  null:  <WorkerCard userCard={userCard}/>}
        </Router>
        </WorkerListPage>
    )
}