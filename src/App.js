import React, {useState, useEffect} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './components/Expenses/ExpensesList.css';
// returns JSX (JavaScript XML) it is basically a HTML code inside javascript 
// this App component serves as a parent component to other components and will be rendered to the DOM

// Just an array of expenses to be initially displayed
// const DUMMY_EXPENSES = [
//   {id:'e1',title:'Car Insurance', expenseAmount:294.09, date: new Date(2021,3,12)},
//   {id:'e2',title:'House', expenseAmount:454.77, date: new Date(2019,5,22)},
//   {id:'e3',title:'Clothes', expenseAmount:124.67, date: new Date(2021,9,2)},
//   {id:'e4',title:'Jewelries', expenseAmount:813.98, date: new Date(2019,8,3)},
// ];

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(); 
const [expenses, setExpenses] = useState([]);
useEffect( ()=> {
const fetchExpenses = async () => {
  const response = await fetch(
    'https://myapiservice.herokuapp.com/expenses'
  )

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }

  const responseData = await response.json();
  // console.log(responseData);

  const EXPENSES = responseData.map(item=>({id:item.id,title:item.title, 
                                      expenseAmount:item.expenseAmount,
                                      date:new Date(item.date)
                                    }));
  setExpenses(EXPENSES);
  // setIsLoading(false);
};


  fetchExpenses().catch((error) => {
    // setIsLoading(false);
    setHttpError(error.message);
  });


  

}, []);




// if (isLoading) {
//   return (  
//     <section >
//       <p>Loading...</p>
//     </section>
//   );
// }

if (httpError) {
  return (
    <section>
      <p>{httpError}</p>
    </section>
  );
}


 //function to receive data Lifted up from NewExpense component.
const addExpenseHandler = expense => {
setExpenses(prevExpenses =>{
  return [expense, ...prevExpenses];
});

};

  return (
    <div>   
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

// exporting the function makes it importable in other folder
export default App;
