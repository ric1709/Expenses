import './App.css'
import Expenses from './components/expenses/Expense'

function App() {
	const expenses = [
		{
			id: 'el1',
			title: 'cars',
			amount: 2000,
			date: new Date(2020, 4, 5),
		},
		{
			id: 'el2',
			title: 'Car Insuranse',
			amount: 200,
			date: new Date(2022, 3, 8),
		},
		{
			id: 'el3',
			title: 'mers',
			amount: 200000,
			date: new Date(2023, 4, 5),
		},
		{
			id: 'el4',
			title: 'Car BMW',
			amount: 2000,
			date: new Date(2026, 5, 18),
		},
		{
			id: 'el5',
			title: 'cars Audi',
			amount: 3000,
			date: new Date(2020, 4, 5),
		},
		{
			id: 'el6',
			title: 'BMW Insuranse',
			amount: 45600,
			date: new Date(2012, 3, 8),
		},
	]

	return (
		<div className='App'>
      <h1>Ciao</h1>
			<Expenses data={expenses}/>
		</div>
	)
}

export default App
