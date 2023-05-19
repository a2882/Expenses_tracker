import './expenseitem.css';

function Abhishek (props){     //function name should be start with cap lat
        const month = props.Date.toLocaleString('en-us',{month:'long'});
        const year = props.Date.getFullYear();
        const day = props.Date.toLocaleString('en-us',{day:'2-digit'});
    return(
        <div className='expenseitem'> 
             <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
             </div>
               <div className='expenseitem_descr'>
                <h2>{props.Title}</h2>
                    <div className='expenseitem_price'>${props.Amount}</div>
            </div>
        </div>
        )
    };  

export default Abhishek ;