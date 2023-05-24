import React,{useState} from 'react'
import './expenses.css';
import Abhishek from './expenseitem';

function Expenses(props){

    const [enteredtitle, setenteredtitle] = useState('');
    const [entereamount, setenteredamount] = useState('');
    const [entereddate, setentereddate] = useState('');
    
    const titleChangeHandler =(event) =>{
        setenteredtitle(event.target.value);
    }
    const amountChangeHandler =(event) =>{
        setenteredamount(event.target.value);
    }
    const dateChangeHandler =(event) =>{
        setentereddate(event.target.value);
    }
    const formsubmit = (event) =>{
        event.preventDefault();
    }
    const expensedata={
        Title: enteredtitle,
        Amount:entereamount,
        Date : new Date(entereddate)
    }

    //setenteredtitle = useState('');
    //setenteredamount = useState('');
   // setentereddate  = useState('');
    
    return (
        <div className = 'expenses'>
              <form onSubmit={formsubmit}>          
                <div>
                    <lable>Title</lable>
                    <input type= 'text' value={enteredtitle} onChange={titleChangeHandler}></input>
               </div>
               <div>
                  <lable>Amount</lable>
                  <input type= 'number' value={entereamount  } onChange={amountChangeHandler}></input>
               </div>
               <div>
                  <lable>Date</lable>
                  <input type= 'date' value={entereddate} onChange={dateChangeHandler}></input>
               </div>
               <button type='submit'> Add expense </button>
            </form>
        <Abhishek
        Date = {props.item[0].Date}
        Title = {props.item[0].Title}
        Amount ={props.item[0].Amount}>
        </Abhishek>
        <Abhishek
        Date = {props.item[1].Date}
        Title = {props.item[1].Title}
        Amount ={props.item[1].Amount}>
        </Abhishek>
        <Abhishek
        Date = {props.item[2].Date}
        Title = {props.item[2].Title}
        Amount ={props.item[2].Amount}>
        </Abhishek>
        <Abhishek
        Date = {props.item[3].Date}
        Title = {props.item[3].Title}
        Amount ={props.item[3].Amount}>
        </Abhishek>
        
        
  
        </div>
     );
}
export default Expenses;