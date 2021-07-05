import React from 'react';

import './ExpensesFilter.css';



//this component can be refered to as a controlled component
//both the value and the changes to the value are not handle in the component itself but parent


const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2019'>2018</option>
          <option value='2019'>2017</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;