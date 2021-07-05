// import css file
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React from 'react'; 
import './ExpenseItem.css';

// this is a stateless or presentational component. 
// No internal state but just there to output data
const ExpenseItem = (props) => {

    return (
    <li>
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
       <div className="expense-item_description">
            <h2>{props.title}</h2>
        <div className="expense-item_price">{props.expenseAmount}</div> 
        </div>
        </Card>
        </li>
        );
}

export default ExpenseItem;