import React, { useState } from 'react';
import Expenses from './Expenses/Expenses';
import NewExpense from './NewExpense/NewExpense';


const Dummy_Expense = [
  {
    id: '1',
    Item: 'Laptop',
    Price: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: '2',
    Item: 'New TV',
    Price: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: '3',
    Item: 'Ropes',
    Price: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: '4',
    Item: 'Mobile',
    Price: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expense);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;