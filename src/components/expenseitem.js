import './expenseitem.css';

function Abhishek (props){       //function name should be start with cap lat
    return(
        <div className='expenseitem'> 
             <div>{props.Date.toISOString()}</div>
               <div className='expenseitem_descr'>
                <h2>{props.Title}</h2>
                    <div className='expenseitem_price'>${props.Amount}</div>
            </div>
        </div>
        )
    };  

export default Abhishek ;