import './ExpenseForm.css';
import React, {useState} from 'react';

const ExpenseForm = (props) =>{

    //initializing multiple state ExpenseForm properties as string 
    //change in one property doesnt affect others
   
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //alternatively u can have all properties in a single state slice
    //however, update to one will need to update all

//    const [userInput, setUserInput] = useState({
// enteredTitle: '',
// enteredAmount: '',
// enteredDate: ''
//     });





    const titleChangeHandler = (event) => {
setEnteredTitle(event.target.value);
//alternately
// if changes depend on previous state
    // the spread operator makes sure that the prevStateof other properties is 
    // the latest other properties is carried along with the changes to one
    // we only overide the Title property here.
// setUserInput((prevState) => {
//     return { ...prevState, enteredTitle: event.target.value};
// });
    };  

      const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value};
        // });
            };  

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value};
        // });
            }; 



// const submitOrderHandler = async (userData) => {
//     setIsSubmitting(true);
//     const order = {"user":{...userData}, "orderedItems":[...cartCtx.items]};
//     console.log(order);
//     await fetch('https://quickmeal.herokuapp.com/saveOrder', {
//       method: 'POST',
//       body: JSON.stringify(order),
//       headers: {
//         'Content-Type': 'application/json',
//       },
      
//     });
//     setIsSubmitting(false);
//     setDidSubmit(true);
//     cartCtx.clearCart();
//   };

        
    const submitHandler = async (event) =>{
        //we dont want the form details to be sent to server and reloading of page as defaulted but to
        //be handle by this javascript
event.preventDefault();

//save the data inside expenseData variable
const expenseData = {
  title: enteredTitle,
  expenseAmount: enteredAmount,
  date: new Date(enteredDate)  
};

//save to database
await fetch('https://myapiservice.herokuapp.com/saveExpense', {
    method: 'POST',
    body: JSON.stringify(expenseData),
    headers: {
      'Content-Type': 'application/json',
    },  
  });


props.onSaveExpenseData(expenseData); //This will transfer the collected form data to the parent before been cleared off
//After the form details has been submitted and processed, clear/reset the properties
setEnteredTitle('')
setEnteredAmount('')
setEnteredDate('')

    };

    return(  
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title: </label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>    
        </div>
        <div className="new-expense__control">
            <label>Amount: </label>
            <input type='number' value={enteredAmount} onChange={amountChangeHandler} min="0.01" step="0.01"/>    
        </div>
        <div className="new-expense__control">
            <label>Date: </label>
            <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31"/>     
        </div>
            </div>
       <div className="new-expense__actions">
           <button type="submit" >Add Expense</button>

       </div>
        </form>

    );
}

export default ExpenseForm;








// const submitOrderHandler = async (userData) => {
//     setIsSubmitting(true);
//     const order = {"user":{...userData}, "orderedItems":[...cartCtx.items]};
//     console.log(order);
//     await fetch('https://quickmeal.herokuapp.com/saveOrder', {
//       method: 'POST',
//       body: JSON.stringify(order),
//       headers: {
//         'Content-Type': 'application/json',
//       },
      
//     });
//     setIsSubmitting(false);
//     setDidSubmit(true);
//     cartCtx.clearCart();
//   };




//   const AvailableMeals = () => {
//     const [meals, setMeals] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [httpError, setHttpError] = useState();
  
//     useEffect(() => {
//       const fetchMeals = async () => {
//         const response = await fetch(
//           'https://quickmeal.herokuapp.com/foods'
//         );
//         // console.log(response);
  
//         if (!response.ok) {
//           throw new Error('Something went wrong!');
//         }
  
//         const responseData = await response.json();
  
//         const loadedMeals = [];
  
//         for (const key in responseData) {
//           loadedMeals.push({
//             id: key,
//             name: responseData[key].name,
//             description: responseData[key].description,
//             price: responseData[key].price,
//           });
//         }
  
//         setMeals(loadedMeals);
//         setIsLoading(false);
//       };
  
//       fetchMeals().catch((error) => {
//         setIsLoading(false);
//         setHttpError(error.message);
//       });
//     }, []);
  
//     if (isLoading) {
//       return (
//         <section className={classes.MealsLoading}>
//           <p>Loading...</p>
//         </section>
//       );
//     }
  
//     if (httpError) {
//       return (
//         <section className={classes.MealsError}>
//           <p>{httpError}</p>
//         </section>
//       );
//     }
  
//     const mealsList = meals.map((meal) => (
//       <MealItem
//         key={meal.id}
//         id={meal.id}
//         name={meal.name}
//         description={meal.description}
//         price={meal.price}
//       />
//     ));
  
//     return (
//       <section className={classes.meals}>
//         <Card>
//           <ul>{mealsList}</ul>
//         </Card>
//       </section>
//     );
//   };
  
//   export default AvailableMeals;