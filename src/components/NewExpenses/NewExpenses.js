import React, { useState } from "react";
import './NewExpenses.css'
import ExpenseForm  from "./ExpenseForm"

const NewExpenses = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    console.log("initial value" + isEditing);

    const isEditingHandler = ()=>{
        setIsEditing(true);
        console.log("handler" + isEditing);
    }

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData)
    }
    const is_EditingHandler = ()=>{
        setIsEditing(false);
        console.log("handler" + isEditing);
    }


    return(
        <div className = 'new-expense'> 
           {!isEditing ? <button onClick = {isEditingHandler}>Add New Expenses </button>:
           <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel ={is_EditingHandler}/>}
        </div>
    )
}
export default NewExpenses;