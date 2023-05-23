import './expenses.css';
import Abhishek from './expenseitem';

function Expenses(props){
    return (
        <div>
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