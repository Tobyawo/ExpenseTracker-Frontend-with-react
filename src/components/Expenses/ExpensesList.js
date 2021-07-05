import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';



const ExpensesList = (props) => {
if(props.items.length === 0){
  return <h2 className='expenses-list__fallback'>Your Expenses</h2>;
}





return (<ul className="expenses-List">
{props.items.map((expense) => 
  (<ExpenseItem 
  key={expense.id} 
  title={expense.title} 
  expenseAmount={`$${expense.expenseAmount}`}
   date={expense.date} />))}

</ul>
);
  };


export default ExpensesList;