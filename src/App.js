import Expenses from "./components/expenses";

function App() {
let expenses = [
   {
      id: 'e1',
      Date : new Date(2023, 8 ,10),
      Title : 'House rent',
      Amount : 500,
   },
   {
      id: 'e2',
      Date : new Date(2023, 8 ,20),
      Title : 'School fee',
      Amount : 150,
   },
   {
      id: 'e3',
      Date : new Date(2023, 8 ,30),
      Title : 'Food',
      Amount : 200,
   },
   {
      id: 'e4',
      Date : new Date(2023, 9 ,20),
      Title : 'insurence',
      Amount : 150,
   },
]
   return (
      <div>
         <h2>Lets start</h2>
         
         <Expenses item = {expenses}/>
      </div>
        );
}

export default App;