import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'
import Card from '../Card'

function Expenses(props) {
	const arr = props.data
	return (
		<Card className='expenses'>
			{arr.map((el, id) => {
				return (
					<ExpenseItem
						key={id}
						title={el.title}
						amount={el.amount}
						date={el.date}
					/>
				)
			})}
		</Card>
	)
}

export default Expenses
