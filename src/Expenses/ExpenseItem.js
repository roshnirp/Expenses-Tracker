import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item_description'>
          <h2>{props.Item}</h2>
          <div className='expense-item_price'>${props.Price}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;