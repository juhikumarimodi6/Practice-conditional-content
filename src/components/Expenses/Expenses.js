import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem"
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from '../ExpensesFilter'
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
const [filteredYear, setfilteredYear] = useState('2020');

const filteredDateHandler = (selectedYear)=>{
  setfilteredYear(selectedYear);
}

const filteredExpenses = props.items.filter(expense =>{return expense.date.getFullYear().toString() === filteredYear})

    return(
     
        <Card className = 'expenses'>
          <div>
            <ExpensesFilter selected= {filteredYear} onFiltered = {filteredDateHandler}/>
              <ExpensesList items = {filteredExpenses}/>
        </div>
    </Card>
    );
}

export default Expenses;