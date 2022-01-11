import React from 'react';
import './ExpenseDate.css'

function ExpenseDate(props) {
    const expenseDate = props.date
    const month = expenseDate.toLocaleDateString("en-Us", {month: "long"})
    const date = expenseDate.toLocaleDateString("en-Us", {day : '2-digit'})
    const year = expenseDate.getFullYear()
    return (
        <div className="expense-date">
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__date'>{date}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
        
    );
}

export default ExpenseDate;