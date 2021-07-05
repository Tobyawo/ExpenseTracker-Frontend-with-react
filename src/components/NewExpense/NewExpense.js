
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

const saveExpenseDataHandler =(enteredExpenseData) =>{
    const expenseData = {
...enteredExpenseData,
id: Math.random().toString()
    };

    // passing values from child component to App.js (parent component) using 
    // props to receive a function from the parent component
    props.onAddExpense(expenseData);
};

// here, data is Lifted up from child to parent using a function that
//is triggered when an event happend in the child component 
//Expense form data are transfered from Expense form to NewExpense
    return(
        <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );

}; 

export default NewExpense;