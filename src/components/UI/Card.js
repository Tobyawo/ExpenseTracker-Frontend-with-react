// extracting surrounding container div and their common css.style into cards
//Card acts as shell or wrapper around our ExpenseItem content or Expenses content or any other component
import './Card.css';

function Card(props){
 //children is a reserved name, it doesnt need to be set as a variable for the card to accept from parent   
// children's value will always be the content btw the opening and closing tag of your custom component where it is used
const classes = 'card ' + props.className; // making sure card css clases and the parent css classes work 

return <div className={classes}>{props.children}</div>

}

export default Card;