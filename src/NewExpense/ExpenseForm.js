import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredItem, setEnteredItem] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  

  const ItemChangeHandler = (e) => {
    setEnteredItem(e.target.value);
    
   
  };

  const PriceChangeHandler = (e) => {
    setEnteredPrice(e.target.value);
;
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      Item: enteredItem,
      Price: enteredPrice,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredItem('');
    setEnteredPrice('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense_controls'>
        <div className='new-expense_control'>
          <label>Item</label>
          <input
            type='text'
            value={enteredItem}
            onChange={ItemChangeHandler}
          />
        </div>
        <div className='new-expense_control'>
          <label>Price</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredPrice}
            onChange={PriceChangeHandler}
          />
        </div>
        <div className='new-expense_control'>
          <label>Date</label>
          <input
            type='date'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense_actions'>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;