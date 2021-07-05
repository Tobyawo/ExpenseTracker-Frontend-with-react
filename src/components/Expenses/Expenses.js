// import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import React, { useState } from 'react'; //import React , and useState hook(one of the most important hooks) from react library





const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })


  // checking if filteredlist is not null with && expression to render not found message or  
  //     map the filteredExpenses to Expenseitem properties. the key is a unique prop to identify each array 
       



return(
  <div>
    <Card className="expenses">
      <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses ={filteredExpenses}/>
     <ExpensesList items={filteredExpenses} /> 
    </Card>
    </div>
);

};

export default Expenses;