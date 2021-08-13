import React,{useState} from "react";
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Book 1',
    amount: 12,
    date: new Date(2019, 2, 12)
  },
  {
    id: 'e2',
    title: 'Book 2',
    amount: 13,
    date: new Date(2020, 3, 13)
  },
  {
    id: 'e3',
    title: 'Book 3',
    amount: 14,
    date: new Date(2021, 4, 14)
  },
  
];

const App = () => {

  const [expenses, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpense(preState => {
      return [expense, ...preState];
    });
  };

  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses}/>
    </div>
  );
}

export default App;
