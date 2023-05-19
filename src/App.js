import Abhishek from './components/expenseitem.js';

function App() {
   let expenseDate = new Date(2023, 8 ,10);
   let expenseTitle = 'School fee';
   let expenseAmount = 200;
   return (
      <div>
         <h2>Lets start</h2>
      <Abhishek
      Date = {expenseDate}
      Title = {expenseTitle}
      Amount ={expenseAmount}>
      
      </Abhishek> 
      </div>
        );
}

export default App;